<<<<<<< HEAD
import React from "react";

function ManageEmployer() {
  const mockEmployees = [
    { id: "E1057", name: "John Smith", email: "john@example.com" },
    { id: "E2869", name: "Sarah Wilson", email: "sarah@example.com" },
    { id: "E3203", name: "Mike Johnson", email: "mike@example.com" },
  ];

  const handleRemove = (id) => {
    alert(`Employee ${id} has been removed.`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-top justify-center p-5">
      <div className="w-full max-w-full bg-white shadow-lg p-10 border border-gray-200 rounded-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Manage Employer</h2>
        <table className="w-full table-auto border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="p-3 border border-gray-300 text-center">ID</th>
              <th className="p-3 border border-gray-300 text-center">Name</th>
              <th className="p-3 border border-gray-300 text-center">Email</th>
              <th className="p-3 border border-gray-300 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {mockEmployees.map((employee) => (
              <tr key={employee.id}>
                <td className="p-3 border border-gray-300 text-center">{employee.id}</td>
                <td className="p-3 border border-gray-300 text-center">{employee.name}</td>
                <td className="p-3 border border-gray-300 text-center">{employee.email}</td>
                <td className="p-3 border border-gray-300 text-center">
                  <button
                    onClick={() => handleRemove(employee.id)}
                    className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition font-semibold shadow-md cursor-pointer"
                  >
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

export default ManageEmployer;
=======
import React from 'react'

function ManageEmployer() {
  return (
    <div>ManageEmployer</div>
  )
}

export default ManageEmployer
>>>>>>> origin/devA
