// import Card from "./Card"

// export default function Gettodo({ list }) {
//     const changestatus = async (id, cmplt) => {
//         const response = await fetch('http://localhost:3000/mytodo/api/v1/todos/' + id, {
//             method: "PUT",
//             body: {
//                 completed: cmplt
//             },
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         const 
        
//     }

//     return (
//         <Card >
//             <div key={list._id}>
//                 <h5 className="font-serif text-2xl font-semibold">{list.title}</h5>
//                 <p>{list.description}</p>
//                 <button onClick={changestatus(list._id, list.completed)} className="font-semibold">{list.completed ? "yes" : "no"} </button>
//             </div>
//         </Card>
//     )
// }
