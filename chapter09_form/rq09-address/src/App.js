import { useState } from "react";

function Address() {
  const [data, setData] = useState({
    address1: "",
    address2: "",
    zip: "",
    city: "",
    state: "",
    country: "",
  });

  const onChange = (key) => (evt) => {
    setData((oldData) => ({ ...oldData, [key]: evt.target.value }));
  };

  let accessToObject = 'address1'

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        Address line 1:
        <input value={data.address1} onChange={onChange("address1")} />
      </label>
      <label>
        address2 line 1:
        <input value={data.address2} onChange={onChange("address2")} />
      </label>
      <label>
        zip line 1:
        <input value={data.zip} onChange={onChange("zip")} />
      </label>
      <label>
        city line 1:
        <input value={data.city} onChange={onChange("city")} />
      </label>
      <label>
        state line 1:
        <input value={data.state} onChange={onChange("state")} />
      </label>
      <label>
        country line 1:
        <input value={data.country} onChange={onChange("country")} />
      </label>
      <div>
        asd{JSON.stringify(data)}<br/>
        123{data.accessToObject
        }<br/>
        123{data[accessToObject]} <br/>
        {data.address1}
      </div>
    </form>
  );
}

function App() {
  return <Address />
}

export default App;
