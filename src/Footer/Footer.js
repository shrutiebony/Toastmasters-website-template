import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.pageYOffset;
      const scrollHeight = document.documentElement.scrollHeight;
      const isAtBottom = scrollPosition >= scrollHeight;
      setIsFooterVisible(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${isFooterVisible ? 'visible' : ''}`}>
      <div className="footer-content">
        <span>Created by Shruti</span>
      </div>
    </footer>
  );
};

export default Footer;
