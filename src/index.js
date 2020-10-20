import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// components for this product
import Components from "./views/Components";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <div className="body">
      <div className="App">
        <Route path="/" exact component={Components} />
      </div>
    </div>
  </Router>,
  document.getElementById("root")
);
