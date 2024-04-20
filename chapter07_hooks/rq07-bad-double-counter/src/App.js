import {useState} from 'react';

const THRESHOLD = 300;

function DoubleClickCounter() {
  const [counter, setCounter] = useState(0)
  const [lastClickTime, setLastClickTime] = useState(null);

  const onClick = () => {
    const isDoubleClick = Date.now() - lastClickTime < THRESHOLD;
    if (isDoubleClick) {
      setCounter((value) => value + 1);
    } else {
      setLastClickTime(Date.now);
    }
  }

  return (
    <main>
      <p>Counter: {counter}</p>
      <button onClick={onClick}>Increment</button>
    </main>
  )
}

function App() {
  return <DoubleClickCounter />
}

export default App;
