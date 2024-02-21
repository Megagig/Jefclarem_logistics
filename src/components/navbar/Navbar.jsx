import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/jefclaremlogo.png';
import './navbar.css';

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#service_path">Services</a>
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
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="jefclarem__navbar">
      <div className="jefclarem__navbar-links">
        <div className="jefclarem__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="jefclarem__navbar-links-container">
          <Menu />
        </div>
      </div>
      <div className="jefclarem__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="jefclarem__navbar-mobile">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="jefclarem__navbar-menu_container scale-up-center">
            <div className="jefclarem__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="jefclarem__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
