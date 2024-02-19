import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/jefclaremlogo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="jefclarem__navbar">
      <div className="jefclarem__navbar-links">
        <div className="jefclarem__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="jefclarem__navbar-links-container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#features">Services</a>
          </p>
          <p>
            <a href="#possibility">About Us</a>
          </p>
          <p>
            <a href="#blog">Blog</a>
          </p>
          <p>
            <a href="#cta">Contact Us</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
