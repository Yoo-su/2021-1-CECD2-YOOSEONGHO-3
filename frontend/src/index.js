import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/global.css";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
