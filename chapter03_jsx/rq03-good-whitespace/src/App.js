import React from 'react';

class App extends React.Component {
  render() {
    return (
      <h1>
        All <em>corgies</em> are awesome
      </h1>
    )
  }
}

class App2 extends React.Component {
  render() {
    return (
      <h1>
        All
        {" "}
        <em>corgies</em>
        {" "}
        are awesome
      </h1>
    )
  }
}


class App3 extends React.Component {
  render() {
    return (
      <h1>{" "}
      <em>corgies</em>{" "}
      are awesome
      </h1>
    )
  }
}

export default App;
