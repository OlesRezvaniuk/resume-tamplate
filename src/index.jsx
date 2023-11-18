import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ResumeTemplate from "./components/ResumeTemplate";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/resume-template">
      <Provider store={store}>
        <ResumeTemplate />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
