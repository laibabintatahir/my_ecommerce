import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

const Header = () => {
  return (
    <header>
      <div className="left-links">
        <div className="logo">
          <Link to="/">
            <img src="images/logo.jpg" alt="Logo" />
          </Link>
        </div>
      </div>
      <nav>
        <ul className="center-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products/abayas">Abayas</Link>
          </li>
          <li>
            <Link to="/products/hijabs">Hijabs</Link>
          </li>
          <li>
            <Link to="/products/accessories">Accessories</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div className="right-links">
        <ul>
          <li className="cart-link">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="login-link">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
