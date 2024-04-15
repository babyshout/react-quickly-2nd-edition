import { useState, useEffect } from "react";

function RemoteDropdown() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch("//www.swapi.tech/api/people")
      .then((res) => {
        console.log("res");
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log("data");
        console.log(data);
        return data.results;
      })
      .then((characters) => {
        console.log("charaters");
        console.log(characters);
        return characters.map(({ name }) => name);
      })
      .then((names) => {
        console.log("names");
        console.log(names);
        return setOptions(names);
      });
  });

  return (
    <select>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}

function App() {
  return <RemoteDropdown />;
}

export default App;
