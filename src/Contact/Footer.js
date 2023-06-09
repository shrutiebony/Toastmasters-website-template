import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">
      <h2 class="footer_heading">For queries, reach out at: </h2>

        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">Phone : </span>
            <span className="contact-value">91XXXXXXXX</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Email : </span>
            <span className="contact-value">GhaziabadToastmasters@gmail.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Location : </span>
            <span className="contact-value">IIM, Lucknow, Noida Campus</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
