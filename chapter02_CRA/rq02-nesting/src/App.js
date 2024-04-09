import React from "react";
import ReactDOM from "react-dom/clients";

const title = React.createElement('h1', null, "Hello World!");
const domElement = document.getElementById("root")
ReactDOM.createRoot(domElement).render(title);