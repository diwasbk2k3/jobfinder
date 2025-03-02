import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewApplicants() {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    // Fetch employer_id from local storage
    const employerId = localStorage.getItem('employer_id');

    // Fetch applicant details from the server using Axios
    const fetchApplicants = async () => {
      try {
        const response = await axios.get('http://localhost:5000/applicants');
        const filteredApplicants = response.data.filter(applicant => applicant.employer_id === employerId);
        setApplicants(filteredApplicants); // Set filtered applicants
      } catch (error) {
        console.error('Error fetching applicants:', error);
      }
    };

    fetchApplicants();
  }, []);

  // Function to prepend https:// if missing
  const getFullUrl = (url) => {
    // Check if the URL already has 'http' or 'https' prefix
    return url.startsWith('http') ? url : `https://${url}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-top justify-center p-5">
      <div className="w-full max-w-full bg-white shadow-lg p-10 border border-gray-200 rounded-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Applicant List</h2>
        <table className="w-full table-auto border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="p-3 border border-gray-300 text-center">SN</th>
              <th className="p-3 border border-gray-300 text-center">Applicant Name</th>
              <th className="p-3 border border-gray-300 text-center">Job Title</th>
              <th className="p-3 border border-gray-300 text-center">Email</th>
              <th className="p-3 border border-gray-300 text-center">Phone</th>
              <th className="p-3 border border-gray-300 text-center">Portfolio Link</th>
              <th className="p-3 border border-gray-300 text-center">Additional Info</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant, index) => (
              <tr key={applicant.applicant_id}>
                <td className="p-3 border border-gray-300 text-center">{index + 1}</td>
                <td className="p-3 border border-gray-300 text-center">{applicant.name}</td>
                <td className="p-3 border border-gray-300 text-center">{applicant.job_title}</td>
                <td className="p-3 border border-gray-300 text-center">{applicant.email}</td>
                <td className="p-3 border border-gray-300 text-center">{applicant.phone}</td>
                <td className="p-3 border border-gray-300 text-center">
                  <a
                    href={getFullUrl(applicant.portfolio_link)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className='text-green-500 font-bold hover:text-green-600'>{applicant.portfolio_link}</p>
                  </a>
                </td>
                <td className="p-3 border border-gray-300 text-center">{applicant.additional_info}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewApplicants;
