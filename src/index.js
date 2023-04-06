import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Counter from "./counter";
import Calculator from "./calc";
import Login from "./login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    {/* <Calculator /> */}
    <Login />
  </React.StrictMode>
);
