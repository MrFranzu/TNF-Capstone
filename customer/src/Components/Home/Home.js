// src/Components/Home/Home.js
import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Event System</h1>
      <p>Discover and book exciting events easily!</p>
      
      <div className="box-container">
        <div className="box">
          <img src="/assets/background.png" alt="Event 1" className="box-image" />
          <p className="box-description">Event 1</p>
        </div>
        <div className="box">
          <img src="/assets/balloon.png" alt="Description 2" className="box-image" />
          <p className="box-description">Event 2</p>
        </div>
        <div className="box">
          <img src="/assets/background.png" alt="Description 3" className="box-image" />
          <p className="box-description">Event 3</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
