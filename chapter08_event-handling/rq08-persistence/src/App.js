import { useState } from "react";

function DropdownCounter() {
  const [counter, setCounter] = useState(0);

  const onChange = (evt) =>{
    // const delta = parseInt(evt.target.value);
    setCounter((value) => {
      console.log(evt);
      return value + parseInt(evt.target.value)})};

  const values = [1, 2, 3, 4, 5];

  return (
    <section>
      <h1>Counter : {counter}</h1>
      <select onChange={onChange}>
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </section>
  );
}

function App() {
  return <DropdownCounter />;
}
export default App;
