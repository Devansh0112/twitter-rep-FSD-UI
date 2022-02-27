import React from "react";
import "./Login.css";

import Navbar from "../Navbar/Navbar";

function Login() {
  const login = function () {
    window.localStorage.setItem("user", "someuser");
    window.location.href = "/";
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="loginBox">
          <h3>Enter your credentials</h3>
          <input
            className="form-control form-control-sm mt-4"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="form-control form-control-sm mt-2"
            type="password"
            placeholder="Password"
            required
          />
          <input
            className="btn btn-outline-primary btn-sm submitbtn mt-4"
            type="button"
            value="Submit"
            onClick={login}
            required
          />
          <br />
          <input
            className="btn btn-outline-success btn-sm submitbtn mt-4"
            type="button"
            value="Register"
            onClick={()=>{console.log('Register')}}
            required
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
