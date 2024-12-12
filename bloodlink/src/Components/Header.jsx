import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.logo}>Your Company Name</h1>
        <nav style={styles.nav}>
          <Link to="/about" style={styles.link}>
            About Us
          </Link>
          <Link to="/Post_Request" style={styles.link}>
            Post Request
          </Link>
          <Link to="/Requests" style={styles.link}>
            Requests
          </Link>
          <Link to="/your_request" style={styles.link}>
            Your Requests
          </Link>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#4CAF50",
    padding: "10px 0",
    color: "#fff",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default Header;
