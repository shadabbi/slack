import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from './context/stateProvider';
import reducer,{ INIT_STATE} from './context/reducer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StateProvider reducer={reducer} initialState={INIT_STATE}>

         <App />
      </StateProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
