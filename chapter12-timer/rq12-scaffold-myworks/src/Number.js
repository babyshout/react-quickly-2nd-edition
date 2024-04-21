/**
 *
 * @param unit  unit p 에 들어갈 내용 (minutes, seconds)
 * @param number 표시해줄 숫자
 * @returns {JSX.Element}
 * @constructor
 */
export default function Number({unit, number}) {

    return (
        <li className="part">
            <p className="number">{String(number).padStart(2, '0')}</p>
            <p className="unit">{unit}</p>
        </li>
    )
}