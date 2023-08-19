import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./containers/App";
//import { robots } from "./robots";
import reportWebVitals from "./reportWebVitals";
import "tachyons";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

reportWebVitals();
