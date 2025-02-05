import React from 'react';

function ViewApplicants() {
  const applicants = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Sam Wilson', email: 'sam@example.com' },
    // Add more applicants as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-top justify-center p-5">
      <div className="w-full max-w-full bg-white shadow-lg p-10 border border-gray-200 rounded-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Applicant List</h2>
        <table className="w-full table-auto border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="p-3 border border-gray-300 text-center">SN</th>
              <th className="p-3 border border-gray-300 text-center">Applicant Name</th>
              <th className="p-3 border border-gray-300 text-center">Email</th>
              <th className="p-3 border border-gray-300 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant, index) => (
              <tr key={applicant.id}>
                <td className="p-3 border border-gray-300 text-center">{index + 1}</td>
                <td className="p-3 border border-gray-300 text-center">{applicant.name}</td>
                <td className="p-3 border border-gray-300 text-center">{applicant.email}</td>
                <td className="p-3 border border-gray-300 text-center">
                  <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition font-semibold shadow-md cursor-pointer">
                    View More
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

export default ViewApplicants;
