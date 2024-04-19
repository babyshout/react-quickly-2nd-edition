import { useEffect, useReducer } from "react";

// function reducer(state, { type, payload }) {
//   switch (type) {
//     case "TYPE_A":
//     // ~~~
//     case "TYPE_B":
//     // type b ~~
//     default: // defualt ~~
//   }
// }

const LOADING_TYPE = {
  INIT: "INITIALIZE",
  LOAD: "LOADING",
  FAIL: "FAILURE",
  SUCCESS: "SUCCESS",
};

Object.freeze(LOADING_TYPE);

const URL = "//swapi.dev/api/films";

const INITIAL_STATE = {
  status: LOADING_TYPE.INIT,
  result: null,
  error: null,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case LOADING_TYPE.INIT:
      return {
        status: "INITIALIZE",
        result: null,
        error: null,
      };
    case LOADING_TYPE.LOAD:
      return {
        ...state,
        status: LOADING_TYPE.LOAD,
      };
    case LOADING_TYPE.FAIL:
      return {
        ...state,
        ["status"]: LOADING_TYPE.FAIL,
      };
    case LOADING_TYPE.SUCCESS:
      return {
        ...state,
        ["status"]: LOADING_TYPE.SUCCESS,
      };

    default:
      return state;
  }
}

function Loader() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: LOADING_TYPE.LOAD });
    fetch(URL)
      .then((res) => res.json())
      .then(({ result: results }) => {
        dispatch({
          type: LOADING_TYPE.SUCCESS,
          payload: results,
        });
      })
      .catch(({ message }) =>
        dispatch({ type: LOADING_TYPE.FAIL, payload: message })
      );
  });

  const {status, error, result} = state;

  if (status === LOADING_TYPE.INIT) {
    return <h1>Initializing....</h1>
  }
  if (status === LOADING_TYPE.LOAD) {
    return <h1>Loading....</h1>
  }
  if (status === LOADING_TYPE.FAIL) {
    return <h1>Error Occurred.... {error}</h1>

  }
  return (
    <>
    <h1>Results are in</h1>
    <ul>
      {result.map(({title}) => (
        <li key={title}>{title}</li>
      ))}
    </ul>
    </>
  )
}

function App() {
  return <Loader />
}

export default App;
