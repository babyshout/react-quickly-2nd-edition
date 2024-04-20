import { useEffect, useState } from "react";

function useToggle(defaultValue = false) {
  const [value, setter] = useState(Boolean(defaultValue))
  const toggle = () => setter(v => !v)

  return [value, toggle]
}

function CountDown({ from }) {
  const [seconds, setSeconds] = useState(from);
  // const [isRunning, setRunning] = useState(false);
  const [isRunning, toggleRunning] = useToggle();

  /**
   * 렌더링 요소가 업데이트 될때.. (setState 를 통해서..)
   * effect() 진행 후, cleanup() 진행되니까..!
   * 위에 if 문으로 진행...?
   * return에 cleanup() 가 없는데.. 위에는???
   * 
   * 아니면 아래의 effect 진행 후, 해당 effect 가 종료되면.. cleanup() 진행..?
   * 
   * 맞음 !!!!!! 로그 확인!!
   */
  useEffect(() => {
    console.log('effect function called!!!')

    if (!isRunning) {
      console.log("isRunning is false!!")
      return () => console.log('!isRunning\'s cleanup function!!');
    }

    const interval = setInterval(
      () =>
        setSeconds((value) => {
          if (value < 1) {
            console.log('value <= 1 is true !! setRunning(false)')
            // setRunning(false);
            toggleRunning()
          }
          return value - 1;
        }),
      300
    );
    return () => {
      console.log('normal cleanup function called!!')
      clearInterval(interval);
    }
  }, [isRunning, toggleRunning]);

  return (
    <section>
      <h2>Time left: {seconds} seconds</h2>
      <button onClick={() => setSeconds(from)}>Reset</button>
      {/* <button onClick={() => setRunning((v) => !v)} disabled={seconds === 0}> */}
      <button onClick={() => toggleRunning()} disabled={seconds === 0}>
        {isRunning ? "Pause" : "Resume"}
      </button>
    </section>
  );
}

function App() {
  return <CountDown from={10} />;
}

export default App;
