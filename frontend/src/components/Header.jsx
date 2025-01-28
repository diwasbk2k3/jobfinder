import React from 'react';
import './Header.css'; // Import the custom CSS file

function Header() {
  return (
    <header className="header">
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <span>HamroJobs</span>
        </div>

        {/* Navigation Bar */}
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/jobs">JOBS</a>
            </li>
            <li>
              <a href="/about-us">ABOUT US</a>
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
