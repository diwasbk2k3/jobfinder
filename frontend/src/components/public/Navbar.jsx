import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  p-4 flex justify-between items-center">
      <div className="text-3xl font-bold text-white hover:cursor-pointer  hover:text-purple-300">JobFinder</div>
      <ul className="text-white flex space-x-6 justify-evenly w-full max-w-[600px]">
        <li>
          <Link to="/" className="flex items-center space-x-2 hover:text-purple-300">
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="flex items-center space-x-2 hover:text-purple-300">
            <i className="fa-solid fa-briefcase"></i>
            <span>Jobs</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="flex items-center space-x-2 hover:text-purple-300">
            <i className="fa-solid fa-info-circle"></i>
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="flex items-center space-x-2 hover:text-purple-300">
            <i className="fa-solid fa-phone"></i>
            <span>Contact Us</span>
          </Link>
        </li>
      </ul>
      <div className="flex space-x-4">
        <Link to="/login" className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-purple-300">
          <i className="fa-solid fa-user"></i>
          <span>Login</span>
        </Link>
        <Link to="/signup" className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-purple-300">
          <i className="fa-solid fa-user-plus"></i>
          <span>Signup</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
