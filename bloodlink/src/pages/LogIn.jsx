import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here (e.g., API call for authentication)
    console.log('Logging in with:', { email, password });
  };

  const handleRegister = () => {
    // Add register logic here (e.g., navigate to registration page)
    console.log('Redirecting to register page');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
        <Link to="/SignUp">
        <button type="button" onClick={handleRegister} style={{ marginLeft: '10px' }}>
          Create an Account
        </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;