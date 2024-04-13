import React, { Component } from "react";

class App extends Component {
  render() {
    const items = ["apples", "pears", "playstation"];

    return <Select items={items} />;
  }
}
class Select extends Component {
  render() {
    return (
      <select>
        {this.props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    );
  }
}

export default App;
