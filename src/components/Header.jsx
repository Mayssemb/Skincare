import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Glowing</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;