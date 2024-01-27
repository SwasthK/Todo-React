import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";

export const Todolist = ({ props, setupdate }) => {
  const [completed, setcompleted] = useState(false);
  
  const deletetodo = () => {
    axios
      .delete("http://localhost:3000/mytodo/api/v1/todos/" + props._id)
      .then((res) => {
        setupdate((val) => !val);
      })
      .catch((err) => console.log(err));
  };

  // console.log("completed before = ", completed);
  useEffect(() => {
    console.log("Reached");

    // console.log("completed after = ", completed);
    // setdone((val) => !val)
    axios
      .put("http://localhost:3000/mytodo/api/v1/todos/" + props._id, {
        completed: completed,
      })
      .then((res) => {
        setupdate((val) => !val);
      });
  }, [completed]);

  return (
    <div className="bg-gray-800  border-2 border-violet-500 rounded-lg p-6 mb-6">
      {completed ? (
        <>
          <h5 className="text-2xl font-bold line-through text-center mb-2">
            {props.title}
          </h5>
          <p className="font-normal line-through text-center dark:text-gray-400">
            {props.description}
          </p>
        </>
      ) : (
        <>
          <h5 className="text-2xl font-bold text-center mb-2">{props.title}</h5>
          <h4 className="font-normal text-center dark:text-gray-400">
            {props.description}
          </h4>
        </>
      )}

      <div className="flex gap-3 justify-center mt-4 font-semibold">
        {props.completed ? (
          <buttons
            className="bg-blue-700 hover:bg-blue-800 cursor-pointer py-2 px-5 rounded-lg font-medium flex gap-3 justify-center items-center  text-sm  me-2 mb-2 "
            onClick={() => {
              setcompleted((val) => !val);
            }}
          >
            Mark as undone
            <div className="text-xl">
              <IoIosCheckmarkCircle />
            </div>
          </buttons>
        ) : (
          <button
            className="bg-blue-700  hover:bg-blue-800 cursor-pointer py-2 px-5 rounded-lg font-medium flex gap-3 justify-center items-center  text-sm  me-2 mb-2 "
            onClick={() => {
              setcompleted((val) => !val);
            }}
          >
            <p>Mark as done</p>
            <div className="text-xl">
              <IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline>
            </div>
          </button>
        )}
        <div className="bg-red-500  hover:bg-red-400 cursor-pointer py-2 px-2 rounded-full font-medium flex gap-3 justify-center items-center  text-2xl  me-2 mb-2">
          <MdDeleteForever onClick={deletetodo}></MdDeleteForever>
        </div>
      </div>
    </div>
  );
};

// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { MdOutlineEdit } from "react-icons/md";
// import { MdDeleteForever } from "react-icons/md";
// import { IoIosCheckmarkCircleOutline } from "react-icons/io";
// import { IoIosCheckmarkCircle } from "react-icons/io";

// export const Todolist = ({ props, setupdate }) => {
//   const [completed, setcompleted] = useState(props.completed || false);
//   const [title, setTitle] = useState(props.title || '');
//   const [description, setDescription] = useState(props.description || '');
//   const [showPrompt, setShowPrompt] = useState(false);

//   const deletetodo = () => {
//     axios
//       .delete("http://localhost:3000/mytodo/api/v1/todos/" + props._id)
//       .then((res) => {
//         setupdate((val) => !val);
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     if (title.trim() === '' || description.trim() === '') {
//       setShowPrompt(true);
//       return; // Do not proceed if either title or description is empty
//     } else {
//       setShowPrompt(false);
//     }

//     axios
//       .put("http://localhost:3000/mytodo/api/v1/todos/" + props._id, {
//         completed: completed,
//       })
//       .then((res) => {
//         setupdate((val) => !val);
//       });
//   }, [completed, title, description]);

//   const handleMarkCompletion = () => {
//     setcompleted((val) => !val);
//   };

//   return (
//     <div className="bg-gray-800 border-2 border-violet-500 rounded-lg p-6 mb-6">
//       {completed ? (
//         <>
//           <h5 className="text-2xl font-bold line-through text-center mb-2">
//             {title}
//           </h5>
//           <p className="font-normal line-through text-center dark:text-gray-400">
//             {description}
//           </p>
//         </>
//       ) : (
//         <>
//           <h5 className="text-2xl font-bold text-center mb-2">{title}</h5>
//           <h4 className="font-normal text-center dark:text-gray-400">
//             {description}
//           </h4>
//         </>
//       )}

//       {showPrompt && (
//         <p className="text-red-500 text-center">Please add details</p>
//       )}

//       <div className="flex gap-3 justify-center mt-4 font-semibold">
//         {completed ? (
//           <button
//             className="bg-blue-700 hover:bg-blue-800 cursor-pointer py-2 px-5 rounded-lg font-medium flex gap-3 justify-center items-center text-sm me-2 mb-2"
//             onClick={handleMarkCompletion}
//           >
//             Mark as undone
//             <div className="text-xl">
//               <IoIosCheckmarkCircle />
//             </div>
//           </button>
//         ) : (
//           <button
//             className="bg-blue-700 hover:bg-blue-800 cursor-pointer py-2 px-5 rounded-lg font-medium flex gap-3 justify-center items-center text-sm me-2 mb-2"
//             onClick={handleMarkCompletion}
//           >
//             <p>Mark as done</p>
//             <div className="text-xl">
//               <IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline>
//             </div>
//           </button>
//         )}
//         <div className="bg-red-500 hover:bg-red-400 cursor-pointer py-2 px-2 rounded-full font-medium flex gap-3 justify-center items-center text-2xl me-2 mb-2">
//           <MdDeleteForever onClick={deletetodo}></MdDeleteForever>
//         </div>
//       </div>
//     </div>
//   );
// };
