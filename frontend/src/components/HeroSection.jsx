import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Container - Search */}
        <div className="left-container">
          <div className="search-container">
            <h2>Find Your Dream Job Today</h2>
            <p>Explore top job opportunities tailored to your skills and preferences.</p>
            <div className="search-bar">
              <input type="text" placeholder="Search for jobs..." className="search-input" />
              <button className="search-btn">Search</button>
            </div>
          </div>
        </div>

        {/* Right Container - Hero Image Card */}
        <div className="right-container">
          <div className="hero-image-card">
            <img src="./hero-image.jpg" alt="Hero Image" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
