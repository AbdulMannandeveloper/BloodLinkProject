import React from "react";
import { Link } from "react-router-dom";  // Import the Link component

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© 2024 Your Company Name. All rights reserved.</p>
        <nav className="footer-nav">
          <Link to="/about" className="footer-link">
            About Us
          </Link>
          <Link to="/Post_Request" className="footer-link">
            Post Request
          </Link>
          <Link to="/Requests" className="footer-link">
            Requests
          </Link>
          <Link to="/myRequests" className="footer-link">
            My Requests
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
