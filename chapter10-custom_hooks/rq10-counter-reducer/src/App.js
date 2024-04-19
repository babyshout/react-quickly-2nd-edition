import { useReducer } from "react";

const CLICK_TYPE = {
  INCREMENT: 'INCREMENT',
  DECREMENT: "DECREMENT"
}

function reducer(state, {type}){
  switch (type) {
    case CLICK_TYPE.INCREMENT:
      return state + 1;
    case CLICK_TYPE.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <section>
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={() => dispatch({type: CLICK_TYPE.INCREMENT})}>
          Increment !!! click me to + 1
        </button>
        <button onClick={() => dispatch({type: CLICK_TYPE.DECREMENT})}
        >
          Decrement !!!! CLICK me to - 1
        </button>
      </div>
    </section>
  )
}

function App() {
  return <Counter />
}

export default App;
