import Timer from "./Timer";
import TimerFormState from "./TimerFormState";
import {useState} from "react";

function TimerManager() {
    const [timerList, setTimerList] = useState([
        300,
    ])

    const handleDeleteButton = (key) => {
        setTimerList(
            timerList.filter((timer, index) => index !== key)
        )
    }

    console.log(timerList);
    return (
        <div className="timers">
            {/*<Timer startTime={300}/>*/}
            {timerList.map((timer, index) => {
                console.log(timer);
                return <Timer key={index} index={index} startTime={timer} handleDeleteButton={handleDeleteButton}/>
            })}
            <TimerFormState timerList={timerList} setTimerList={setTimerList}/>
        </div>
    );
}

export default TimerManager;
