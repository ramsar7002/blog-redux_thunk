import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducers";
import thunk from "redux-thunk";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
const store = createStore(reducer, applyMiddleware(thunk));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
