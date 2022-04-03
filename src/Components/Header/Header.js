import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="header_Container">
      <div className="logo_Container">
        <h1>
          Computer<span>Hub</span>{" "}
        </h1>
      </div>
      <div className="nav_Container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/reviews">Reviews</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </div>
  );
};

export default Header;
