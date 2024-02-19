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
      </div>
    </div>
  );
};

export default Navbar;
