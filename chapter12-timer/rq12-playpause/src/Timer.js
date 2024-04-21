import { useState, useEffect } from "react";

import Button from "./Button";
import TimeDisplay from "./TimeDisplay";

function Timer({ startTime, onComplete }) {
  const [remaining, setRemaining] = useState(startTime);
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return;
    }
    function tick() {
      setRemaining((oldValue) => {
        const value = oldValue - 1;
        if (value <= 0) {
          setRunning(false);
          onComplete();
          return startTime;
        }
        return value;
      });
    }
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [isRunning, onComplete]);

  const play = () => setRunning(true);
  const pause = () => setRunning(false);

  return (
    <section className={`timer ${isRunning ? "timer-ticking" : ""}`}>
      <TimeDisplay time={remaining} />
      {isRunning ? (
        <Button icon="pause" label="Pause" onClick={pause} />
      ) : (
        <Button icon="play" label="Play" onClick={play} />
      )}
      <Button icon='trash' label="Delete" onClick={onComplete} />
    </section>
  );
}

export default Timer;
