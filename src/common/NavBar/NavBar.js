import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <nav id="nav">
      <Link to="/">HOME</Link>
      <Link to="/retire-cal">PROJECTS</Link>
    </nav>
  );
};

export default NavBar;
