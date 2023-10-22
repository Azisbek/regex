import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ValidContext from "./context/context-valid";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ValidContext>
    <App />
  </ValidContext>
);
