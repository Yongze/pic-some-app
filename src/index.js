import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { TheContext } from "./Context";

ReactDOM.render(
  <TheContext val={""}>
    <Router>
      <App />
    </Router>
  </TheContext>,
  document.getElementById("root")
);
