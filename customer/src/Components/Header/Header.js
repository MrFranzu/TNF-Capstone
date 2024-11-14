// src/Components/Header/Header.js
import React from 'react';
import './Header.css'; 

const Header = ({ setCurrentPage }) => {
  return (
    <header className="header">
      <img src="assets/tnf.png" alt="Logo" className="logo" />
      <nav>
        <ul className="nav-list">
          <li><button onClick={() => setCurrentPage('home')}>Home</button></li>
          <li><button onClick={() => setCurrentPage('about')}>About</button></li>
          <li><button onClick={() => setCurrentPage('contact')}>Contact Us</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
