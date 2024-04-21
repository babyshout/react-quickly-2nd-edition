import Number from './Number'

export default function TimeDisplay({remainingTime}) {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return (
        <ul className="parts">

            <Number unit='minutes' number={minutes}/>
            <li className="colon">:</li>
            <Number unit='seconds' number={seconds}/>

        </ul>
    )
}