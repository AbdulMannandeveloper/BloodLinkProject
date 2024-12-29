import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Login.css"; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
  };

  const handleRegister = () => {
    console.log('Redirecting to register page');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Please login to your account</p>
        <form onSubmit={handleLogin} className="login-form">
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
              <button type="button" className="btn-primary" onClick={handleRegister}>Login</button>
            </Link>
            <Link to="/SignUp">
              <button type="button" className="btn-secondary" onClick={handleRegister}>
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
