import React from 'react';
import './LandingHeader.css';

const Header = () => {
  return (
    <header className="header">
      <h2 className="header-title">
      <span role="img" aria-label="Crystal" className="header-icon">
          ❄️
        </span>
        Toastmasters: Where Leaders are made
        <span role="img" aria-label="Crystal" className="header-icon">
          ❄️
        </span>
      </h2>
    </header>
  );
};

export default Header;
