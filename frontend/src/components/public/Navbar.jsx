import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 flex justify-between items-center relative">
      <div className="text-3xl font-bold text-white hover:cursor-pointer hover:text-purple-300">JobFinder</div>
      
      <button
        className="text-white text-2xl md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <ul className={`text-white flex flex-col md:flex-row md:space-x-6 justify-evenly w-full max-w-[600px] absolute md:static top-full left-0 bg-blue-500 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out ${menuOpen ? 'block' : 'hidden md:flex'}`}>
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
        {/* Mobile Login & Signup */}
        <li className="md:hidden mt-2">
          <Link to="/login" className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-purple-300">
            <i className="fa-solid fa-user"></i>
            <span>Login</span>
          </Link>
        </li>
        <li className="md:hidden mt-2">
          <Link to="/signup" className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-purple-300">
            <i className="fa-solid fa-user-plus"></i>
            <span>Signup</span>
          </Link>
        </li>
      </ul>
      
      {/* Desktop Login & Signup */}
      <div className="hidden md:flex space-x-4">
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