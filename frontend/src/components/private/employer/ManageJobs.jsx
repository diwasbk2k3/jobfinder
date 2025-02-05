<<<<<<< HEAD
import React from 'react'

function ManageJobs() {
  return (
    <div>ManageJobs</div>
  )
}

export default ManageJobs
=======
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
    <div className="min-h-screen bg-gray-50 flex justify-center p-5">
      <div className="w-full max-w-full bg-white shadow-lg p-10 rounded-lg border border-gray-200 mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Manage Jobs</h2>

        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="p-4 border-b text-left">Job ID</th>
              <th className="p-4 border-b text-left">Job Name</th>
              <th className="p-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="border-t">
                <td className="p-4 border-b">{job.id}</td>
                <td className="p-4 border-b">{job.name}</td>
                <td className="p-4 border-b flex justify-center space-x-4">
                  <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-400 transition font-semibold shadow-md">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-400 transition font-semibold shadow-md">
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
>>>>>>> origin/devA
