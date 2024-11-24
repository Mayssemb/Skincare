import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Skincare. All Rights Reserved.</p>
        <div className="social-links">
          <a href="#" className="social-icon">Facebook</a>
          <a href="#" className="social-icon">Instagram</a>
          <a href="#" className="social-icon">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
