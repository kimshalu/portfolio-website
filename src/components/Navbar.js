import React from "react";
import "../styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Shalu's Portfolio</h1>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
