import React from "react";
import "./index.css";
import App from "./App";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
const Container = document.getElementById("root");
const root = ReactDOMClient.createRoot(Container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
