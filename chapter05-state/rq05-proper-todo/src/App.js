import React from "react";

// function TodoApplication({ initialList }) {
//   const [todos, setTodos] = React.useState(initialList);

//   return (
//     <main>
//       {todos.map((todo, index) => (
//         <p key={todo}>
//           {todo}
//           <button
//             onClick={() => {
//               setTodos((value) => [
//                 ...value.slice(0, index),
//                 ...value.slice(index + 1),
//               ]);
//             }}
//           >
//             x
//           </button>
//         </p>)
//       )}
//     </main>
//   );
// }

// function TodoApplication({ initialList }) {
//   const [todos, setTodos] = React.useState(initialList);

//   return (
//     <main>
//       {todos.map((todo, index) => <p key={todo}>
//           {todo}
//           <button
//             onClick={() => {
//               setTodos((value) => [
//                 ...value.slice(0, index),
//                 ...value.slice(index + 1),
//               ]);
//             }}
//           >
//             x
//           </button>
//         </p>)
//       }
//     </main>
//   );
// }

function TodoApplication({ initialList }) {
  const [todos, setTodos] = React.useState(initialList);

  return (
    <main>
      {todos.map((todo, index) => {
        console.log('index');
        console.log(index);
        console.log('todo')
        console.log(todo);
        return (
          <p key={todo}>
            {todo}
            <button
              onClick={() => {
                setTodos((value) => {
                  console.log('value');
                  console.log(value);
                  const returnValue = [
                    ...value.slice(0, index),
                    ...value.slice(index + 1),
                  ]
                  console.log('returnValue');
                  console.log(returnValue);
                  return returnValue});
              }}
            >
              x
            </button>
          </p>
        );
      })}
    </main>
  );
}

function App() {
  const items = ["Feed the plants", "Water the dishes", "Clean the cat"];

  return <TodoApplication initialList={items} />;
}

export default App;
