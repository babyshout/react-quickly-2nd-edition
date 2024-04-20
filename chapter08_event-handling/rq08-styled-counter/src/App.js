import { useState } from "react";

function Button({handleClick, label}) {
  const buttonStyle = {
    color: 'blue',
    border: '1px solid',
    background: 'transparent',
    borderRadius: '.25em',
    padding: '.5em 1em',
    margin: '.5em'
  }

  // 이렇게 하면, 해당 클릭 이벤트에 추가적인 작동을 부여할수 있고,
  // 필요에 따라 이벤트 리스너나 이펙트에 의해 호출되는 콜벡에 불과한 요소에
  // 프로퍼티로 함수를 전달할 때 매우 일반적인 형태임
  // on* 네이밍을 사용하면, 이벤트 리스너처럼 보이게 되고, 사용자는 이벤트 리스너로 작동할 것으로 기대하게 됨..
  // 직접 이벤트 핸들러(이벤트 객체를 수신하는)에는 on* 네이밍을 사용하고,
  // 콜백(인수를 받지 않거나, 일부 사용자 정의 인수를받는)함수에는 handle* 네이밍을 사용할것임
  const onClick = () => handleClick();

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  )
}

function StyledCounter() {
  const [counter, setCounter] = useState(0);
  const update = (d) => setCounter((v) => v + d);

  return (
    <section>
      <h1>Counter: {counter}</h1>
      <div>
        {/* <Button handleClick={() => update(1)} label="Increment" />
        <Button handleClick={() => update(-1)} label='Decrement' /> */}
        <Button handleClick={() => update(1)} label="Increment" />
        <Button handleClick={() => update(-1)} label='Decrement' />
      </div>
    </section>
  )
}

function App() {
  return <StyledCounter />
}

export default App;
