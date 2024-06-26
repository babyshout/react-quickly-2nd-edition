import Timer from "./Timer";
import { useState } from "react";
import AddTimer from "./AddTimer"

function TimerManager() {
  const [startTime, setStartTime] = useState(0)
  return (
    <div className="timers">
      {startTime > 0 ? (

        <Timer startTime={300} onComplete={() => setStartTime(0)}/>
      ): (
        <AddTimer onAdd={setStartTime} />
      )}

    </div>
  );
}

export default TimerManager;
