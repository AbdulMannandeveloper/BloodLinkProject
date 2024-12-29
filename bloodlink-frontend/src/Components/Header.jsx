import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Make sure to import the CSS file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="header-container">
        <h1 className="logo">Bloodlink</h1>
        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <Link to="/about" className="link">About Us</Link>
          <Link to="/Post_Request" className="link">Post Request</Link>
          <Link to="/Requests" className="link">Requests</Link>
          <Link to="/myRequests" className="link">My Requests</Link>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
