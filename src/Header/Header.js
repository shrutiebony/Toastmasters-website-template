import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">
      <nav>
    <div class="navbar">
    <Link class="logo" to={process.env.PUBLIC_URL + "/"}>Ghaziabad Toastmasters Club</Link>
      <ul class="nav-links">
      <Link class="linkClass" to={process.env.PUBLIC_URL + "/Home"}>Home</Link>
      <Link class="linkClass" to={process.env.PUBLIC_URL + "/Gallery"}>Gallery</Link>
      <Link class="linkClass" to={process.env.PUBLIC_URL + "/Contact"}>Contact US</Link>
      </ul>
    </div>
  </nav>
      </h1>
    </header>
  );
};

export default Header;
