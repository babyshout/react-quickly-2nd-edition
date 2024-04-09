import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', null, 'hello world!')
const link = React.createElement('a', {href: '//react.dev'}, 'read more')
const group = React.createElement(React.Fragment, null, title, link)

const domElement = document.getElementById("root")
ReactDOM.createRoot(domElement).render(group);