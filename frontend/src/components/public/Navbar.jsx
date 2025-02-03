import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div>HamroJobs</div>
      <ul>
        <li>
          <Link to="/">
            <i className="fa-solid fa-house"></i>
            Home
          </Link>
        </li>
        <li>
          <Link to="/jobs">
            <i className="fa-solid fa-briefcase"></i>
            Jobs
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="fa-solid fa-info-circle"></i>
            About
          </Link>
        </li>
      </ul>

      <div>
        <Link to="/login">
          <i className="fa-solid fa-user" ></i>
          Login
        </Link>

        <Link to="/signup">
          <i className="fa-solid fa-user-plus"></i>
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
