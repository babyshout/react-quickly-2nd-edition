import Button from "./Button";
import {useState} from "react";

function FormInput({name,value, ...rest}) {
    console.log(rest);
    return (
        <li className='part'>
            <input className='number' type='number' name={name} id={name} value={String(value).padStart(2, '0')} {...rest}/>
            <label className={'unit'} htmlFor={'seconds'}>{name}</label>
        </li>
    )
}

export default function TimerForm({setTimerList}) {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const handleSubmit = (evt) => {
        console.log('handleSubmit', evt)
        evt.preventDefault();
        // console.log(evt.target.value)
        // console.log(typeof evt.target.elements.minutes.value);
        const startTime = minutes * 60 + seconds

        // console.log(startTime)
        // console.log(typeof startTime)


        setTimerList(oldTimerList => {
            return [...oldTimerList, startTime];
        })
    }

    const handleStartWithZero = (evt) => {
        let valueAsNumber = evt.target.valueAsNumber;
        let value = evt.target.value;
        console.log(value);
        console.log(typeof value)

        if (valueAsNumber > 0) {
            // value = value.split(/[^0]/, '')[1]
            // value = value.startsWith()
            console.log(value)
            evt.target.value = value
        } else {
            valueAsNumber = 0
            evt.target.valueAsNumber = valueAsNumber
        }

    }

    const handleSeconds = (evt) => {
        const secondsValue = evt.target.valueAsNumber;
        secondsValue > 60 ? setSeconds(secondsValue % 60) : setSeconds(secondsValue);

        if (secondsValue < 10)
            evt.target.value = 0 + secondsValue;
    }

    return (
        <form className='timer timer-new' onSubmit={handleSubmit}>
            <ul className='parts'>
                <FormInput name={'minutes'} value={minutes} onChange={(evt) => {
                    handleStartWithZero(evt)
                    setMinutes(evt.target.valueAsNumber)
                }}/>
                <li className='colon'>:</li>
                <FormInput name={'seconds'} value={seconds} onChange={(evt) => {
                    handleStartWithZero(evt)
                    handleSeconds(evt)
                }
                }/>
            </ul>
            <Button label='new Timer' icon='play'/>
        </form>
    )
}