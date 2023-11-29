import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">BMCC PROGRAMMING CLUB</div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#newsAndUpdate">News and Update</a>
        <a href="#events">Events</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;