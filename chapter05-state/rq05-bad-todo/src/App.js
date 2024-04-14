import React from "react";

function TodoApplication({ initialList }) {
  const [todos, setTodos] = React.useState(initialList);
  

  return (
    <main>
      {todos.map((todo, index) => (
        <p key={todo}>
          {todo}
          <button
            onClick={() => {
              todos.splice(index, 1);
              console.log(todos)
              setTodos(todos);
            }}
          >
            x
          </button>
        </p>
      ))}
    </main>
  );
}

function App() {
  const items = ["Feed the plants", "Water the dishes", "Clean the cat"];

  return <TodoApplication initialList={items} />;
}

export default App;
