import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Sign Up</Link>
      <Link to="/login">Login</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/about">About Us</Link>
    </nav>
  );
};

export default Header;
