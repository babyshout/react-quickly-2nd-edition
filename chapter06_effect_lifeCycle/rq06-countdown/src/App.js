import { useEffect, useState } from "react";

function CountDown({ from }) {
  const [seconds, setSeconds] = useState(from);
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    console.log('effect setup function called!!!')

    if (!isRunning) {
      console.log("isRunning is false!!")
      return;
    }

    const interval = setInterval(
      () =>
        setSeconds((value) => {
          if (value <= 1) {
            console.log('value <= 1 is true !! setRunning(false)')
            setRunning(false);
          }
          return value - 1;
        }),
      1000
    );
    return () => {
      console.log('cleanup function called!!')
      clearInterval(interval);}
  }, [isRunning]);

  return (
    <section>
      <h2>Time left: {seconds} seconds</h2>
      <button onClick={() => setSeconds(from)}>Reset</button>
      <button onClick={() => setRunning((v) => !v)} disabled={seconds === 0}>
        {isRunning ? "Pause" : "Resume"}
      </button>
    </section>
  );
}

function App() {
  return <CountDown from={10} />;
}

export default App;
