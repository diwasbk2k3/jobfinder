import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function EmployerNavbar() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('employer_id');
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 flex justify-between items-center flex-wrap md:flex-nowrap">
      <div className="text-3xl font-bold text-white">JobFinder</div>
      <ul className="text-white flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center md:items-start w-full md:w-auto mt-4 md:mt-0">
        <li>
          <Link to="/employer/post-new-job" className="hover:text-purple-300">Post New Job</Link>
        </li>
        <li>
          <Link to="/employer/manage-job" className="hover:text-purple-300">Manage Job</Link>
        </li>
        <li>
          <Link to="/employer/view-applicant" className="hover:text-purple-300">View Applicants</Link>
        </li>
      </ul>
      <button
        onClick={handleLogout} 
        className="bg-white text-blue-600 px-9 py-2 ml-34 rounded-lg hover:bg-purple-300 hover:cursor-pointer mt-4 md:mt-0">
        Logout
      </button>
    </nav>
  );
}

export default EmployerNavbar;
