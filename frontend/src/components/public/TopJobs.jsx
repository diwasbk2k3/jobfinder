import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Footer from "./Footer";

const TopJobs = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    axios
      .get("http://localhost:5000/jobs")  // Update with your backend API URL
      .then((response) => setJobs(response.data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const handleApplyClick = (job) => {
    navigate('/apply', { state: { job } }); // Navigate with job details in state
  };

  return (
    <section className="py-12 bg-gradient-to-r from-indigo-400 to-indigo-900 text-white text-center">
      <div className="flex items-center justify-center mb-8">
        <img src="/topJobsIcon.png" alt="Top Jobs Icon" className="w-12 h-12 mr-4" />
        <h2 className="text-3xl font-bold">Top Jobs</h2>
      </div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {jobs.length > 0 ? (
            jobs.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 text-left">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{job.job_title}</h3>
                <p className="text-gray-600"><strong>Owner:</strong> {job.owner}</p>
                <p className="text-gray-600"><strong>Employment:</strong> {job.job_type}</p>
                <p className="text-gray-600"><strong>Location:</strong> {job.location}</p>
                <p className="text-gray-600"><strong>Skills:</strong> {job.skills}</p>
                <p className="text-gray-600"><strong>Deadline:</strong> {new Date(job.deadline).toISOString().split("T")[0]}</p>
                <p className="text-gray-600"><strong>Status:</strong> {job.status}</p>
                <button
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => handleApplyClick(job)} // Use onClick to trigger navigation
                >
                  Apply Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-800 text-lg font-semibold">No jobs available.</p>
          )}
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default TopJobs;
