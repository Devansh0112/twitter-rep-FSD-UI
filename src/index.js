import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Login from "./Login/Login";
import Register from "./Register/Register";
import Users from "./Users/Users";

const routing = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path='users' element={<Users />} />
    </Routes>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
