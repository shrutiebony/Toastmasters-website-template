import React from 'react';
import './Introduction.css'; // CSS file for styling
import groupImage from './Group.png'
const Introduction = () => {
  return (
    <div className="toastmasters-container">
      <div className="toastmasters-introduction">
        <h2>Welcome to Toastmasters</h2>
        <p>
        Whether you want to become a confident speaker, enhance your presentation abilities, or develop leadership qualities, Toastmasters provides a supportive and engaging environment to help you achieve your goals.
        There are currently over 15,900 clubs worldwide.  </p>
        <p>Ghaziabad Toastmasters club is a part of Toastmasters International.
        We currently meet every Saturday. Our meetings have a in-person format, which means you have the opportunity to join our meetings in person at the IIM Lucknow campus, Noida.        </p>
        <p>
        </p>
      </div>
      <div className="toastmasters-image">
        <img src={groupImage} />
      </div>
    </div>
  );
};

export default Introduction;
