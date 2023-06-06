import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import middleware from "./state-management/middleware/index.effects";
import reducer from "./state-management/reducers/index.reducers";

const store = createStore(reducer, middleware);
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
