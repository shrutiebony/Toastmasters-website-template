import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <h1 className="header-title">
        <nav>
          <div className={`navbar ${showMenu ? 'show' : ''}`}>
            <Link className="logo" to={"/"}>
              Ghaziabad Toastmasters Club
            </Link>
            <div className={`nav-links ${showMenu ? 'show' : ''}`}>
              <Link
                className="linkClass"
                to={"/Home"}
              >
                Home
              </Link>
              <Link
                className="linkClass"
                to={"/Gallery"}
              >
                Gallery
              </Link>
              <Link
                className="linkClass"
                to={"/Contact"}
              >
                Contact US
              </Link>
            </div>
            <div className="menu-icon" onClick={handleMenuToggle}>
              Menu
            </div>
          </div>
        </nav>
      </h1>
    </header>
  );
};

export default Header;
