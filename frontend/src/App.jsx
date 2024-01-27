// import { useEffect, useState } from "react"
// import Gettodo from "./compo/Gettodo"
// export default function App() {
//   const [todo, settodo] = useState([])

//   const [addtodo, addnewtodo] = useState({
//     title: "",
//     description: ""
//   })

//   useEffect(() => {
//     fetch('http://localhost:3000/mytodo/api/v1/todos')
//       .then(async (response) => {
//         const todos = await response.json()
//         settodo(todos.todo)
//       })
//   }, [todo])

//   async function pushtodo(e) {
//     e.preventDefault()
//     console.log(addtodo);
//     console.log("reached");
//     const ans = await fetch('http://localhost:3000/mytodo/api/v1/todos', {
//       method: "POST",
//       body: JSON.stringify(addtodo),
//       headers: {
//         "Content-Type": "application/json",
//       }
//     })

//     if (ans.ok) {
//       const newtodo = await ans.json()
//       settodo([...todo, newtodo])
//       console.log(newtodo);

//     }
//     console.log(addtodo);
//     console.log("SUBMITTED");
//   }

//   return (
//     <div >
//       <h1>TODO LIST</h1>
//       <div>
//         <form action="" onSubmit={pushtodo}>
//           <input type="text" placeholder="Enter todo title" onChange={(e) => {
//             addnewtodo((prevTodo) => ({ ...prevTodo, title: e.target.value }));
//             console.log(addtodo);
//           }} />
//           <input type="text" placeholder="Enter todo description" onChange={(e) => {
//             addnewtodo((prevTodo) => ({ ...prevTodo, description: e.target.value }));
//             console.log(addtodo);
//           }} />
//           <input type="submit" value="ADD TODO" />
//         </form>
//       </div>

//       {todo.map(list => (
//         <Gettodo key={list._id} list={list} />
//       ))}
//     </div>
//   )
// }

import React, { useEffect, useState } from "react";
import { Todolist } from "./compo/Todolist";
import axios from "axios";
export default function App() {
  const [todos, settodos] = useState([]);
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [update, setupdate] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/mytodo/api/v1/todos")
      .then((res) => {
        console.log("fetched ", res.data);
        settitle("");
        setdesc("");
        settodos(res.data.todo);
      })
      .catch((err) => console.log(err));
  }, [update]);

  const posttodo = () => {
    axios
      .post("http://localhost:3000/mytodo/api/v1/todos", {
        title,
        description: desc,
      })
      .then((res) => {
        settodos(res.doc);
        setupdate((val) => !val);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div class="max-w-sm mx-auto mt-10 text-white ">
        <h1 className="text-center text-5xl font-semibold font-mono mb-3">
          TODO LIST
        </h1>
        <label for="inp1" className="text-sm font-medium dark:text-white ">
          todo title
        </label>
        <input
          id="inp1"
          className="text-sm mt-2 mb-3 rounded bg-gray-700 text-white p-3 w-[380px]"
          type="text"
          placeholder="Enter todo title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <label for="inp2" className="text-sm font-medium dark:text-white mt-20">
          todo description
        </label>
        <input
          id="inp2"
          className="text-sm  mt-2 rounded bg-gray-700 text-white p-3 w-[380px]"
          type="text"
          placeholder="Enter todo description"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <div className="flex justify-center">
          <button
            className="bg-blue-800 py-2 px-4 mt-6 mb-6 rounded font-bold"
            onClick={posttodo}
          >
            Add todo
          </button>
        </div>

          {todos &&
            todos.map((ele) => (
              <Todolist
                key={ele._id}
                props={ele}
                setupdate={setupdate}
              ></Todolist>
            ))}
        </div>

    </>
  );
}
