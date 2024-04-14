import React, { useState } from 'react';

function Counter({ start }) {
  const [counter, setCounter] = useState(start);

  console.log(counter);
  console.log(setCounter);
  console.log(useState);

  return (
    <main>
      <p>Counter: {counter} </p>
      <button onClick={() => setCounter(value => value + 1)}>
        Increment
      </button>
      <button onClick={() => console.log(counter + 1)}>
        Increment
      </button>
    </main>
  )
}

function App() {
  return (
    <>
    <Counter start={0} />
    <Counter start={123} />
    <Counter start={-64} />
    </>
  )
}

export default App;
