import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QuickstartProvider } from "./Context";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Transactions from "./Components/Transactions";

ReactDOM.render(
  <React.StrictMode>
    <QuickstartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </QuickstartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
