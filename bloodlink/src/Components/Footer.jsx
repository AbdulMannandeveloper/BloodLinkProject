import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>© 2024 Your Company Name. All rights reserved.</p>
        <nav style={styles.nav}>
          <a href="/about_us" style={styles.link}>
            About Us
          </a>
          <a href="/contact" style={styles.link}>
            Contact
          </a>
          <a href="/privacy" style={styles.link}>
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  text: {
    margin: "0 0 10px",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default Footer;
