import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          GlowUp Skincare ✨
        </Link>
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/features" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
  Features
</NavLink>

          
        
          <NavLink to="/cart" className="cart-link">
            <FaShoppingCart size={24} />
          </NavLink>
          <div className="auth-buttons">
            <Link to="/signUp" className="sign-button">Sign Up</Link>
            <Link to="/signIn" className="sign-button">Sign In</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
