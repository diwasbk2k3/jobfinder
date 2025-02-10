import React from 'react';
import { Link } from 'react-router-dom';

const TopJobs = () => {
  const jobs = [
    { title: "Software Engineer", location: "Kathmandu", type: "Full-Time", salary: "NPR 50,000" },
    { title: "Data Analyst", location: "Lalitpur", type: "Part-Time", salary: "NPR 40,000" },
    { title: "Project Manager", location: "Bhaktapur", type: "Full-Time", salary: "NPR 60,000" },
    { title: "UX Designer", location: "Pokhara", type: "Contract", salary: "NPR 45,000" },
    { title: "Backend Developer", location: "Butwal", type: "Full-Time", salary: "NPR 55,000" },
    { title: "Frontend Developer", location: "Dharan", type: "Part-Time", salary: "NPR 35,000" },
    { title: "QA Engineer", location: "Hetauda", type: "Full-Time", salary: "NPR 48,000" },
    { title: "System Administrator", location: "Biratnagar", type: "Contract", salary: "NPR 52,000" },
    { title: "DevOps Engineer", location: "Janakpur", type: "Full-Time", salary: "NPR 65,000" },
    { title: "Cyber Security Analyst", location: "Dhangadhi", type: "Part-Time", salary: "NPR 58,000" }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-indigo-400 to-indigo-900 text-white text-center">
      <div className="flex items-center justify-center mb-8">
        <img src="./public/topJobsIcon.png" alt="Top Jobs Icon" className="w-12 h-12 mr-4" />
        <h2 className="text-3xl font-bold">Top Jobs</h2>
      </div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {jobs.map((job, index) => (
            <div key={index} className="bg-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 text-left">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
              <p className="text-gray-600">Location: {job.location}</p>
              <p className="text-gray-600">Employment: {job.type}</p>
              <p className="text-gray-600">Salary: {job.salary}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"><Link to="/apply">Apply</Link></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopJobs;
