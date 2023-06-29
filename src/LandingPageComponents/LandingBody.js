import React, { useState } from 'react';
import './LandingBody.css';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  const [isDark, setIsDark] = useState(false);

  const handleMouseEnter = () => {
    setIsDark(true);
  };

  const handleMouseLeave = () => {
    setIsDark(false);
  };


  return (
    
    <div class="container">

    <div
      className={`landing-page ${isDark ? 'dark' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      <main className="content">
        <h1 class="welcome-heading glow">Ghaziabad Toastmasters club welcomes you</h1>
        <Link to={"/Home"} className="button">Read more about Us!</Link>

      </main>

    </div>
    </div>
  );
};

export default LandingPage;
