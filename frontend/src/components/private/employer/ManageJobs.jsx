import React from 'react';

function ManageJobs() {
  // Placeholder data for jobs
  const jobs = [
    { id: 1, name: 'Software Engineer' },
    { id: 2, name: 'Data Scientist' },
    { id: 3, name: 'Product Manager' },
    // Add more jobs as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-top justify-center p-5">
      <div className="w-full max-w-full bg-white shadow-lg p-10 border border-gray-200 rounded-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Manage Jobs</h2>
        <table className="w-full table-auto border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="p-3 border border-gray-300 text-center">Job ID</th>
              <th className="p-3 border border-gray-300 text-center">Job Name</th>
              <th className="p-3 border border-gray-300 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td className="p-3 border border-gray-300 text-center">{job.id}</td>
                <td className="p-3 border border-gray-300 text-center">{job.name}</td>
                <td className="p-3 border border-gray-300 text-center">
                  <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-400 transition font-semibold shadow-md cursor-pointer">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-400 transition font-semibold shadow-md cursor-pointer ml-4">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageJobs;
