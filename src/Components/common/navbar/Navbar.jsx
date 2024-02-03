import React from 'react';
import { FaBell, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <section className="navbar">
      <a href="/" className="navbar_item">Home</a>
     
      
      <a href="/notifi" className="navbar-item">
        <FaBell className="fa-bell" /> {/* Apply the CSS class for FaBell icon */}
      </a>
      <a href="/singout" className="navbar-item">
        <FaSignOutAlt className="fa-sign-out-alt" /> {/* Apply the CSS class for FaSignOutAlt icon */}
      </a>
    </section>
  );
}

export default Navbar;
