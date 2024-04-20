import { useState, useEffect } from "react";

function MouseStatus() {
  const [isMoving, setMoving] = useState(false);
  function onMouseMove() {
    setMoving(true);
  }
  useEffect(() => {
    if (!isMoving) {return console.log('clenup !isMoving')};
    const timeout = setTimeout(() => setMoving(false), 500);
    return () => {
      console.log('normal cleanup');
      return clearTimeout(timeout);}
  }, [isMoving]);

  return (
    <section onMouseMove={onMouseMove}>
      <h2>
        The Mouse is {!isMoving && "not"} moving: {isMoving ? "O" : "X"}
      </h2>
    </section>
  );
}

function App() {
  return <MouseStatus />;
}

export default App;
