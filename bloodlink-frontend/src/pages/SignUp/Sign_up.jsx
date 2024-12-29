import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SignUp.css"; // Import the CSS file for styling
function SignUp() {

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7777/SignUp", {
        email,
        phone,
        name,
        cnic,
        password,
        confirmPassword,
        bloodGroup,
        address,
        city,
      })
      .then((response) => {
        console.log("Registration successful:", response.data);
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
    console.log("Registering with:", {
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
    console.log("Redirecting to login page");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Register</h2>
        <form className="signup-form" onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Format: 0XXX-XXXXXXX"
              pattern="0\d{3}-\d{7}"
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cnic">CNIC</label>
            <input
              type="text"
              id="cnic"
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
              placeholder="Format: XXXXX-XXXXXXX-X"
              pattern="\d{5}-\d{7}-\d"
              className="input-field"
              required
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
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="bloodGroup">Blood Group</label>
            <input
              type="text"
              id="bloodGroup"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              placeholder="Enter your blood group"
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter your city"
              className="input-field"
              required
            />
          </div>
          <div className="button-group">
            <button type="submit" className="btn-primary">
              Sign Up
            </button>
            <Link to="/LogIn">
              <button
                type="button"
                className="btn-secondary"
                onClick={handleLoginRedirect}
                style={{ marginLeft: "10px" }}
              >
                Already Have an Account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
