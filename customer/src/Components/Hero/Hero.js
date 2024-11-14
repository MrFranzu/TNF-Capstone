// src/Components/Hero/Hero.js
import React from 'react';
import './Hero.css'; // Import the corresponding CSS file

const Hero = ({ setCurrentPage }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Event System</h1>
        <p>Book your next event in seconds. Enjoy a seamless and unforgettable experience!</p>
        <button className="cta-btn" onClick={() => setCurrentPage('booking')}>Book an Event</button>
      </div>
    </section>
  );
};

export default Hero;
