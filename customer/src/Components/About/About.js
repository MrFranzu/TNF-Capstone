// src/About.js
import React from 'react';
import './About.css'; // Import the corresponding CSS file
import eventImage from './event.jpg'; // Import the image from the src folder

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src={eventImage} alt="Event" />
        </div>
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            TNF Event Center offers a beautiful, customizable space for celebrations of all kinds —
            from christenings to weddings and everything in between. Let us help you create unforgettable
            memories in a setting that’s as unique as your event!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
