import Button from "./Button";
import TimeDisplay from "./TimeDisplay";
import React, {useReducer} from "react";

const TIMER_STATUS = {
    RUN: "RUN",
    DONE: "DONE",
    STOP: "STOP",
}

const initialTimerState = {
    status: TIMER_STATUS.RUN,
    remainingTime: 0,
    isPlay: true,
    isTimerEnd: false,
}

function timerReducer(state, {status, ...timerStatus}) {
    console.log('state in timerReducer', state);
    console.log('status : ', status)
    console.log('timerStatus : ', timerStatus);
    let valueToReturn;
    switch (status) {
        case TIMER_STATUS.RUN:
            valueToReturn = {...state, isPlay: true, isTimerEnd: false, ...timerStatus, status: status};
            console.log('valueToReturn : ', valueToReturn)
            return valueToReturn
        case TIMER_STATUS.DONE:
            valueToReturn = {...state, isPlay: false, isTimerEnd: true, ...timerStatus, status: status};
            console.log('valueToReturn : ', valueToReturn)
            return valueToReturn;
        case TIMER_STATUS.STOP:
            valueToReturn = {...state, isPlay: false, isTimerEnd: false, status: status};
            console.log('valueToReturn : ', valueToReturn)
            return valueToReturn
        default:
            return {...state};
    }
}

function Timer({startTime, handleDeleteButton, index}) {
    console.log(index);
    const [timerState, dispatchTimerState] = useReducer(timerReducer, {...initialTimerState, remainingTime: startTime})
    // const [remainingTime, setRemainingTime] = React.useState(startTime);
    // const [isPlay, setPlay] = React.useState(false);
    // const [isTimerEnd, setTimerEnd] = React.useState(false);

    React.useEffect(() => {
        if (!timerState.isPlay) {
            console.log('!isPlay')
            dispatchTimerState({status: TIMER_STATUS.STOP})
            // setPlay(false);
            return
        }

        function everyTickHandler() {
            console.log('everyTickHandler() called')
            const remainingTimeToDispatchTimerState = timerState.remainingTime - 1;

            dispatchTimerState({status: TIMER_STATUS.RUN, remainingTime: remainingTimeToDispatchTimerState})
            if (timerState.remainingTime <= 0) {
                dispatchTimerState({status: TIMER_STATUS.DONE})
            }
            // setRemainingTime(oldValue => {
            //     const value = oldValue - 1
            //     if (value <= 0) {
            // dispatchTimerState({status: TIMER_STATUS.DONE})
            // setPlay(false)
            // setTimerEnd(true);
            // return startTime;
            // }
            // return value;
            // }
            // );
        }

        const interval = setInterval(everyTickHandler, 10)
        return () => clearInterval(interval);
    }, [timerState.isPlay, startTime, timerState.remainingTime])
    return (
        <section
            className={`timer ${timerState.isPlay ? 'timer-ticking' : ''} ${timerState.isTimerEnd ? 'timer-ringing' : ''} `}>
            {/*<TimeDisplay remainingTime={remainingTime}/>*/}
            <TimeDisplay remainingTime={timerState.remainingTime}/>
            {!timerState.isPlay ? (
                <Button onClick={() => {
                    dispatchTimerState({status: TIMER_STATUS.RUN})
                    // setPlay(true);
                    // setTimerEnd(false)
                }} icon='play' label='Play'/>
            ) : (
                <Button onClick={() => {
                    dispatchTimerState({status: TIMER_STATUS.STOP})
                    // setPlay(false);
                }} icon='pause' label='Pause'/>
            )}
            <Button onClick={() => {
                console.log('onClick!!')
                console.log(handleDeleteButton)
                handleDeleteButton(index)
            }} icon={'trash'} label={'Trash'}/>
        </section>
    );
}

export default Timer;
