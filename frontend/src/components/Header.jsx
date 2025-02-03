import React from 'react';
import './Header.css'; // Import the custom CSS file
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt='logo' className="main-logo"></img>
          <span>HamroJobs</span>
        </div>

        {/* Navigation Bar */}
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/jobs">Jobs</a>
            </li>
            <li>
              <a href="/about-us">About us</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/signup">Signup</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
