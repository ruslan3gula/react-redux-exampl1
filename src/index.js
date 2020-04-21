import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { createStore } from "redux";


import App from "./App";
import reducer from './store/reducer';

const rootElement = document.getElementById("root");

const store = createStore(reducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
