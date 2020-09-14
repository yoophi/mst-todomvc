import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

const todos = [
  {
    text: "Taste JavaScrip",
    completed: true,
  },
  {
    text: "Buy a unicorn",
    completed: false,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App todos={todos} />
  </React.StrictMode>,
  document.getElementById("root")
);
