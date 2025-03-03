import React, { useEffect, useState } from "react";
import axios from "axios";

function ManageEmployer() {
  const [employers, setEmployers] = useState([]);

  // Fetch all employers
  useEffect(() => {
    fetchEmployers();
  }, []);

  const fetchEmployers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/employers");
      setEmployers(response.data);
    } catch (error) {
      console.error("Error fetching employers:", error);
    }
  };

  // Delete employer
  const handleDelete = async (employer_id) => {
    if (!window.confirm("Are you sure you want to delete this employer?")) return;
    
    try {
      await axios.delete(`http://localhost:5000/employers/${employer_id}`);
      setEmployers(employers.filter((employer) => employer.employer_id !== employer_id));
    } catch (error) {
      console.error("Error deleting employer:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-top justify-center p-5">
      <div className="w-full max-w-full bg-white shadow-lg p-10 border border-gray-200 rounded-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Manage Employer</h2>
        <table className="w-full table-auto border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="p-3 border border-gray-300 text-center">ID</th>
              <th className="p-3 border border-gray-300 text-center">Email</th>
              <th className="p-3 border border-gray-300 text-center">Phone</th>
              <th className="p-3 border border-gray-300 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {employers.length > 0 ? (
              employers.map((employer) => (
                <tr key={employer.employer_id}>
                  <td className="p-3 border border-gray-300 text-center">{employer.employer_id}</td>
                  <td className="p-3 border border-gray-300 text-center">{employer.email}</td>
                  <td className="p-3 border border-gray-300 text-center">{employer.phone}</td>
                  <td className="p-3 border border-gray-300 text-center">
                    <button
                      onClick={() => handleDelete(employer.employer_id)}
                      className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition font-semibold shadow-md cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-3 border border-gray-300 text-center text-gray-500">
                  No employers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageEmployer
