import Button from "./Button";

function FormInput({name, ...rest}) {
    return (
        <li className='part'>
            <input className='number' type='number' name={name} id={name} {...rest}/>
            <label className={'unit'} htmlFor={'seconds'}>{name}</label>
        </li>
    )
}

export default function TimerForm({setTimerList}) {

    const handleSubmit = (evt) => {
        console.log('handleSubmit', evt)
        evt.preventDefault();
        const minutes = evt.target.elements.minutes.valueAsNumber;
        const seconds = evt.target.elements.seconds.valueAsNumber;
        console.log(evt.target.elements.minutes.value)
        console.log(typeof evt.target.elements.minutes.value);
        const startTime =  minutes * 60  + seconds

        console.log('startTime', startTime)
        // console.log(typeof startTime)


        setTimerList(oldTimerList => {
            return [...oldTimerList, startTime];
        })
    }

    return (
        <form className='timer timer-new' onSubmit={handleSubmit}>
            <ul className='parts'>
                <FormInput name={'minutes'} defaultValue={0}/>
                <li className='colon'>:</li>
                <FormInput name={'seconds'} defaultValue={0}/>
            </ul>
            <Button label='new Timer' icon='play'/>
        </form>
    )
}