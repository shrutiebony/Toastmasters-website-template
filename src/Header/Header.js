import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">
      <nav>
    <div class="navbar">
      <a href="./" class="logo">Ghaziabad Toastmasters Club</a>
      <ul class="nav-links">
        <li><a href="/Home">Home</a></li>
        <li><a href="/Gallery">Gallery</a></li>
        <li><a href="/Contact">Contact US</a></li>
      </ul>
    </div>
  </nav>
      </h1>
    </header>
  );
};

export default Header;
