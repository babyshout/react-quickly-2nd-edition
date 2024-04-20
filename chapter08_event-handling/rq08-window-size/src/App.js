import { useState, useEffect } from "react";

function getWindowSize() {
  // window 객체에 직접 접근함!!!
  return `${window.innerWidth}x${window.innerHeight}`
}

function WindowSize() {
  const [size, setSize] = useState(getWindowSize());

  useEffect(() => {
    // window 객체에 resize 될때 사용할 이벤트 핸들러
    const onResize = () => setSize(getWindowSize());
    // 이벤트 리스너를 등록하고, 해당 이벤트를 처리할 핸들러를 붙여줌
    window.addEventListener('resize', onResize);
    console.log('setSize in effect',setSize);
    // size 조정이 끝나면, 바로 이벤트 리스너를 제거해줌..!!! 안해주면 계속 남아있음
    return () =>window.removeEventListener('resize', onResize);
    // setSize() 가 무슨 의미인지는 모르겠음
  }, [setSize])
  return <h1>Window size: {size}</h1>
}

function App() {
  return <WindowSize />
}

export default App;
