<<<<<<< HEAD
import React from 'react'

function EmployerDashboard() {
  return (
    <div>EmployerDashboard</div>
  )
}

export default EmployerDashboard
=======
import React from 'react';

function EmployerDashboard() {
  // Placeholder data for total jobs and total applicants
  const totalJobs = 15;
  const totalApplicants = 120;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-5">
      <div className="w-full max-w-full bg-white shadow-lg p-10 rounded-lg border border-gray-200 mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Employer Dashboard</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Total Jobs Posted Card */}
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center w-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold">Total Jobs Posted</h3>
            <p className="text-4xl font-bold mt-2">{totalJobs}</p>
          </div>

          {/* Total Applicants Card */}
          <div className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center w-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold">Total Applicants</h3>
            <p className="text-4xl font-bold mt-2">{totalApplicants}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployerDashboard;
>>>>>>> origin/devA
