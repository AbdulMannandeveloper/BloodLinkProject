import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7777/Login", { email, password })
      .then((response) => {
        console.log("Login successful:", response.data);
        localStorage.setItem("name", response.data.user);
        if (response.status === 200) {
          window.location.href = "/about";
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
    console.log("Logging in with:", { email, password });
  };

  const handleRegister = () => {
    console.log("Redirecting to register page");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Please login to your account</p>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="input-field"
            />
          </div>
          <div className="button-group">
            <Link to="/about">
              <button
                type="button"
                className="btn-primary"
                onClick={handleLogin}
              >
                Login
              </button>
            </Link>
            <Link to="/SignUp">
              <button
                type="button"
                className="btn-secondary"
                onClick={handleRegister}
              >
                Create an Account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
