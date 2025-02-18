<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

const AdminDashboard = () => {
  // Placeholder data for total employers and total applications
  const totalEmployers = 245;
  const totalApplicants = 1876;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-5">
      <div className="w-full max-w-full bg-white shadow-lg p-10 rounded-lg border border-gray-200 mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Admin Dashboard</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Total Employers Card */}
          <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-6 rounded-lg shadow-lg flex flex-col items-center w-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold">Total Employers</h3>
            <p className="text-4xl font-bold mt-2">{totalEmployers}</p>
          </div>

          {/* Total Applications Card */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-400 text-white p-6 rounded-lg shadow-lg flex flex-col items-center w-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold">Total Applicants</h3>
            <p className="text-4xl font-bold mt-2">{totalApplicants}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
=======
=======
>>>>>>> origin/devA
import React from 'react'

function AdminDashboard() {
  return (
    <div>AdminDashboard</div>
  )
}

<<<<<<< HEAD
export default AdminDashboard
>>>>>>> origin/devA
=======
export default AdminDashboard
>>>>>>> origin/devA
