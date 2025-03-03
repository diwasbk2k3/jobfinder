import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [stats, setStats] = useState({ totalEmployers: 0, totalApplicants: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://localhost:5000/stats/admin-stats'); // Update API URL if needed
        setStats(response.data);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to fetch statistics');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-5">
      <div className="w-full max-w-full bg-white shadow-lg p-10 rounded-lg border border-gray-200 mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Admin Dashboard</h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Total Employers Card */}
            <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-6 rounded-lg shadow-lg flex flex-col items-center w-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold">Total Employers</h3>
              <p className="text-4xl font-bold mt-2">{stats.totalEmployers}</p>
            </div>

            {/* Total Applicants Card */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-400 text-white p-6 rounded-lg shadow-lg flex flex-col items-center w-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold">Total Applicants</h3>
              <p className="text-4xl font-bold mt-2">{stats.totalApplicants}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
