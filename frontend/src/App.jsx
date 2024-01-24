import { useEffect, useState } from "react"


export default function App() {
  const [todo, settodo] = useState([])
  const [addtodo, addnewtodo] = useState({
    title: "",
    description: ""
  })

  useEffect(() => {
    fetch('http://localhost:3000/mytodo/api/v1/todos')
      .then(async (response) => {
        const todos = await response.json()
        settodo(todos.todo)
      })
  }, [])

  async function pushtodo(e) {
    e.preventDefault();
    console.log("reached");
    const ans = await fetch('http://localhost:3000/mytodo/api/v1/todos', {
      method: "POST",
      body: JSON.stringify(addtodo),
      headers: {
        "Content-Type": "application/json",
      }
    })

    if (ans.ok) {
      const newtodo = await ans.json()
      settodo([...todo, newtodo])
      console.log(newtodo);

    }
    console.log(addtodo);
    console.log("SUBMITTED");
  }


  return (
    <div >
      <h1>TODO LIST</h1>

      <div>
        <form action="" onSubmit={pushtodo}>
          <input type="text" placeholder="Enter todo title" onChange={(e) => {
            addnewtodo((prevTodo) => ({ ...prevTodo, title: e.target.value }));
            console.log(addtodo);
          }} />
          <input type="text" placeholder="Enter todo description" onChange={(e) => {
            addnewtodo((prevTodo) => ({ ...prevTodo, description: e.target.value }));
            console.log(addtodo);
          }} />
          <input type="submit" value="ADD TODO" />
        </form>
      </div>

      {todo.map(list => (
        <Card key={list._id}>
          <div>
            <h5 className="font-serif text-2xl font-semibold">{list.title}</h5>
            <p>{list.description}</p>
            <button className="font-semibold">{list.completed ? "yes" : "no"}</button>
          </div>
        </Card>
      ))}
    </div>
  )
}

function Card({ children }) {
  return <div className="bg-slate-100 p-8 border-2 border-black m-7 rounded-lg">
    {children}
  </div>
}


