import {Component, Fragment} from 'react';

class App extends Component {
  render() {
    const list = [
      { breed: "치와와", description: "작은 품종의 개." },
      { breed: "코기", description: "귀여운 품종의 개." },
      { breed: "컴벌랜드 시프도그", description: "멸종된 품종의 개."},
    ];
    return <Breeds list={list} />;
  }
}

class Breeds extends Component {
  render() {
    return (
      <dl>
        {this.props.list.map(
          ({breed, description}) => (
            <Fragment key={breed}>
              <dt>{breed}</dt>
              <dd>{description}</dd>
            </Fragment>
          )
        )}
      </dl>
    )
  }
}

export default App;
