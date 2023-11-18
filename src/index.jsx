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
<<<<<<< HEAD
      <Provider store={store}>
        <ResumeTemplate />
      </Provider>
=======
      {/* <Provider store={null}> */}
      <App />
      {/* </Provider> */}
>>>>>>> 26e17b82193ec09f8ab7fee6a036769997daf45a
    </BrowserRouter>
  </React.StrictMode>
);
