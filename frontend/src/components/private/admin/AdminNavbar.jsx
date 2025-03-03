import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('admin_email');
    navigate('/admin/login');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 flex justify-between items-center flex-wrap md:flex-nowrap">
      <div className="text-3xl font-bold text-white">JobFinder</div>
      
      {/* Hamburger menu for mobile */}
      <button 
        className="md:hidden text-white text-xl focus:outline-none" 
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Navbar items */}
      <ul className="text-white flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center md:items-start w-full md:w-auto mt-4 md:mt-0">
        <li>
          <Link to="/admin/dashboard" className="hover:text-purple-300">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/manage-employer" className="hover:text-purple-300">Manage Employer</Link>
        </li>
      </ul>

      {/* Dropdown menu on mobile */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 right-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 rounded-lg shadow-md`}>
        <ul className="text-white space-y-4">
          <li>
            <Link to="/admin/dashboard" className="hover:text-purple-300" onClick={() => setIsOpen(false)}>Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/manage-employer" className="hover:text-purple-300" onClick={() => setIsOpen(false)}>Manage Employer</Link>
          </li>
        </ul>
      </div>

      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="bg-white text-blue-600 ml-32 px-12 py-2 rounded-lg hover:bg-purple-300 hover:cursor-pointer mt-4 md:mt-0"
      >
        Logout
      </button>
    </nav>
  );
}

export default AdminNavbar;
