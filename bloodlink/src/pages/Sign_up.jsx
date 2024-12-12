import React, { useState } from 'react';
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [cnic, setCnic] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Add registration logic here (e.g., API call to register user)
    console.log('Registering with:', {
      email,
      phone,
      name,
      cnic,
      password,
      confirmPassword,
      bloodGroup,
      address,
      city,
    });
  };

  const handleLoginRedirect = () => {
    // Add login redirection logic here (e.g., navigate to login page)
    console.log('Redirecting to login page');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Format: 0XXX-XXXXXXX"
            pattern="0\d{3}-\d{7}"
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="cnic">CNIC</label>
          <input
            type="text"
            id="cnic"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            placeholder="Format: XXXXX-XXXXXXX-X"
            pattern="\d{5}-\d{7}-\d"
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
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
        </div>
        <div>
          <label htmlFor="bloodGroup">Blood Group</label>
          <input
            type="text"
            id="bloodGroup"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            placeholder="Enter your blood group"
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            required
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your city"
            required
          />
        </div>
        <Link to="/LogIn">
        <button type="submit">Sign Up</button> 
        </Link>
        <Link to="/LogIn">
            <button
            type="button"
            onClick={handleLoginRedirect}
            style={{ marginLeft: '10px' }}
            >
            Already Have an Account
            </button>
        </Link>
      </form>
    </div>
  );
}

export default SignUp;