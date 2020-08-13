import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <nav id="navBar" className="nav845container">
      <Link to="/">HOME</Link>
      <Link to="/projects">PROJECTS</Link>
    </nav>
  );
};

export default NavBar;
