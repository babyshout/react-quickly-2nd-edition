import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Link extends React.Component {
  render() {
    return React.createElement(
      'p',
      null,
      React.createElement(
        'a',
        {href : this.props.url},
        // 자바스크립트의 기능, 별도의 React 기능이 아님..!
        `Read more about ${this.props.framework}`,
        
      ),
    );

    // 또는...
    const link = React.createElement(
      'a',
      {href: this.props.url},
      `Read more about ${this.props.framework}`,
    );
    if (this.props.framework === "React") {
      return React.createElement('h1', null, link);
    }
    return React.createElement("p", null, link);
  }
}

const link1 = React.createElement(
  Link,
  {framework: 'React', url: '//react.dev'}
)
const link2 = React.createElement(
  Link,
  {framework: 'Vue', url: '//vuejs.org'}
)
const link3 = React.createElement(
  Link,
  {framework: 'Angular', url: '//angular.io'}
)

const group = React.createElement(
  React.Fragment, null, link1, link2, link3
)

const domElement = document.getElementById('root')

ReactDOM.createRoot(domElement).render(group)