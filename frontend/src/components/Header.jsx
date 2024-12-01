import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header({ cart }) {
  const navigate = useNavigate();
  const role = localStorage.getItem("role"); // Assuming role is stored in localStorage after login
  const token = localStorage.getItem("token");

  const handleSignOut = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    localStorage.removeItem("role");  // Remove role from localStorage
    navigate("/"); // Redirect to homepage after sign out
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">
          Shop
        </Link>
        <div className="nav-links">
          {/* Home Link */}
          <Link to="/" className="nav-link home-link">
            Home
          </Link>
          
          {/* Shop Link */}
          <Link to="/features" className="nav-link">
            Shop
          </Link>
          
          {/* Cart Link */}
          <Link to="/cart" className="cart-link">
            Cart ({cart.length})
          </Link>

          {/* Role-based Navigation */}
          {role === 'admin' && (
            <Link to="/customers" className="nav-link">
              Customers
            </Link>
          )}

          {role === 'user' && (
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
          )}

          {/* Sign In / Sign Up or Sign Out Link */}
          {!token ? (
            <>
              <Link to="/signIn" className="nav-link">
                Sign In
              </Link>
              <Link to="/signUp" className="nav-link">
                Sign Up
              </Link>
            </>
          ) : (
            <Link
              to="/"
              onClick={handleSignOut}
              className="nav-link"
            >
              Sign Out
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
