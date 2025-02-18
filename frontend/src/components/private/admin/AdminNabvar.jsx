import React from 'react';
import { Link } from 'react-router-dom';

function AdminNavbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 flex justify-between items-center">
      <div className="text-3xl font-bold text-white">JobFinder</div>
      <ul className="text-white flex space-x-6">
        <li>
          <Link to="/admin/dashboard" className="hover:text-purple-300">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/manage-employer" className="hover:text-purple-300">Manage Employer</Link>
        </li>
      </ul>
      <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-purple-300">
        Logout
      </button>
    </nav>
  );
}

export default AdminNavbar;
