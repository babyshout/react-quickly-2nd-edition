import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const title = React.createElement('h1', null, 'hello world!');

const link = React.createElement("a", {href: "//react.dev"}, "Read more");
const group = React.createElement("div", null, title, link);
const domElement = document.getElementById("root");
ReactDOM.createRoot(domElement).render(group);