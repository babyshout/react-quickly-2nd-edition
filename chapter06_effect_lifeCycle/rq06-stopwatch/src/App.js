import { useState, useEffect } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setSeconds((seconds) => seconds + 1),
      1000
    );
    // setInterval(() => setSeconds((seconds) => seconds + 1) , 100)
    /**
     * 아래 행위를 안해줘도 interval 이 초기화돼서 확인해봤더니,
     * console.log() 가 컴포넌트가 마운트 해제될때..
     *  실행되는거 확인함
     */
    return () => {
      
      console.log("cleanup!!");
      return clearInterval(interval);
    };
  }, []);

  return <h1>Seconds : {seconds}</h1>;
}

function App() {
  const [showWatch, setShowWatch] = useState(false);
  return (
    <>
      <button onClick={() => setShowWatch((b) => !b)}>Toggle watch</button>
      {showWatch && <Stopwatch />}
    </>
  );
}

// 마운트 해제시 AbortController 를 사용하여 요청을 취소하는 방법
// useEffect(() => {
//   const controller = new AbortController();
//   fetch(url, { controller }).then((data) => {
//     // handle the data
//   });
//   return () => {
//     controller.abort();
//   };
// }, []);

// 컴포넌트가 마운트되어 있는지 여부를 추적
// useEffect(() => {
//   let mounted = true;
//   fetch(url).then((data) => {
//     if (!mounted) {
//       return;
//     }
//     // handle the data
//   });
//   return () => {
//     mounted = false;
//   };
// }, []);

export default App;
