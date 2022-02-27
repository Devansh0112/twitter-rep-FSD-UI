import React, { Component } from "react";
import "./Register.css";

import Navbar from "../Navbar/Navbar";

export class Register extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="loginBox">
            <h3>Enter your credentials</h3>
            <input
              className="form-control form-control-sm mt-4"
              type="text"
              placeholder="Username"
              required
            />
            <input
              className="form-control form-control-sm mt-2"
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
              className="form-control form-control-sm mt-2"
              type="password"
              placeholder="Confirm password"
              required
            />
            <input
              className="btn btn-outline-primary btn-sm submitbtn mt-4"
              type="button"
              value="Submit"
              required
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
