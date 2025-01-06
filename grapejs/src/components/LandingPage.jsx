// src/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleDesignClick = () => {
    navigate('/editor');
  };

  return (
    <div className="landing-page">
      <h1>Free and Open Source Web Builder Framework</h1>
      <p>Next generation tool for building templates without coding</p>
      <button className="design-button" onClick={handleDesignClick}>Design</button>
    </div>
  );
};

export default LandingPage;
