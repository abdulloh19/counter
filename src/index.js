import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Counter from "./counter";
import Login from "./calc";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    <Login />
  </React.StrictMode>
);
