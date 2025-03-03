import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">About JobFinder</h3>
          <p className="text-sm opacity-80">Helping you find your dream job with ease. Explore top job opportunities tailored to your skills and preferences.</p>
        </div>
        
        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><Link to="/" className="hover:text-purple-300">Home</Link></li>
            <li><Link to="/jobs" className="hover:text-purple-300">Jobs</Link></li>
            <li><Link to="/about" className="hover:text-purple-300">About</Link></li>
            <li><Link to="/contact" className="hover:text-purple-300">Contact</Link></li>
          </ul>
        </div>
        
        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-300"><i className="fa-brands fa-facebook text-xl"></i></a>
            <a href="#" className="hover:text-purple-300"><i className="fa-brands fa-twitter text-xl"></i></a>
            <a href="#" className="hover:text-purple-300"><i className="fa-brands fa-instagram text-xl"></i></a>
            <a href="#" className="hover:text-purple-300"><i className="fa-brands fa-linkedin text-xl"></i></a>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-sm opacity-80 mt-8 border-t border-white/20 pt-4">
        &copy; {new Date().getFullYear()} JobFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;