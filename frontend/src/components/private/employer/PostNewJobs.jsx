import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

function PostNewJob() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    ownerName: "",
    jobType: "",
    location: "",
    salary: "",
    skills: "",
    description: "",
    deadline: "",
    status: "Open",
  });

  // Get the employer_id from localStorage
  const employerId = localStorage.getItem("employer_id");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!employerId) {
      toast.error("Employer ID is missing in localStorage.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/jobs/create-jobs", {
        employer_id: employerId,
        job_title: formData.jobTitle,
        owner: formData.ownerName,
        job_type: formData.jobType,
        location: formData.location,
        salary: formData.salary,
        skills: formData.skills,
        description: formData.description,
        deadline: formData.deadline,
        status: formData.status,
      });

      if (response.status === 201) {
        toast.success("Job posted successfully!");
        // Reset form or redirect, as needed
      } else {
        toast.error(`Error: ${response.data.error}`);
      }
    } catch (err) {
      console.error("Error posting job:", err);
      toast.error("An error occurred while posting the job.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-10">
      <div className="w-full max-w-full bg-white shadow-lg p-10 border border-gray-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Post a New Job</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Job Title */}
          <div className="relative">
            <label className="block font-semibold text-gray-700">Job Title</label>
            <input 
              type="text" 
              name="jobTitle" 
              value={formData.jobTitle} 
              onChange={handleChange} 
              required 
              className="w-full p-3 pl-10 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none" 
            />
            <i className="fas fa-briefcase text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/90"></i>
          </div>

          {/* Owner Name */}
          <div className="relative">
            <label className="block font-semibold text-gray-700">Owner Name</label>
            <input 
              type="text" 
              name="ownerName" 
              value={formData.ownerName} 
              onChange={handleChange} 
              required 
              className="w-full p-3 pl-10 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none" 
            />
            <i className="fas fa-building text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/90"></i>
          </div>

          {/* Job Type */}
          <div className="relative">
            <label className="block font-semibold text-gray-700">Job Type</label>
            <select 
              name="jobType" 
              value={formData.jobType} 
              onChange={handleChange} 
              required 
              className="w-full p-3 pl-10 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            >
              <option value="">Select Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Remote">Remote</option>
              <option value="Contract">Contract</option>
            </select>
            <i className="fas fa-user-tie text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/90"></i>
          </div>

          {/* Location */}
          <div className="relative">
            <label className="block font-semibold text-gray-700">Location</label>
            <input 
              type="text" 
              name="location" 
              value={formData.location} 
              onChange={handleChange} 
              required 
              className="w-full p-3 pl-10 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none" 
            />
            <i className="fas fa-map-marker-alt text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/90"></i>
          </div>

          {/* Salary */}
          <div className="relative">
            <label className="block font-semibold text-gray-700">Salary</label>
            <input 
              type="text" 
              name="salary" 
              value={formData.salary} 
              onChange={handleChange} 
              required 
              className="w-full p-3 pl-10 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none" 
            />
            <i className="fas fa-dollar-sign text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/90"></i>
          </div>

          {/* Skills */}
          <div className="relative">
            <label className="block font-semibold text-gray-700">Skills</label>
            <input 
              type="text" 
              name="skills" 
              value={formData.skills} 
              onChange={handleChange} 
              required 
              className="w-full p-3 pl-10 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none" 
            />
            <i className="fas fa-cogs text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/90"></i>
          </div>

          {/* Job Description */}
          <div className="relative">
            <label className="block font-semibold text-gray-700">Job Description</label>
            <textarea 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              required 
              rows="4" 
              className="w-full p-3 pl-10 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
            <i className="fas fa-align-left text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/90"></i>
          </div>

          {/* Deadline */}
          <div className="relative">
            <label className="block font-semibold text-gray-700">Deadline</label>
            <input 
              type="date" 
              name="deadline" 
              value={formData.deadline} 
              onChange={handleChange} 
              required 
              className="w-full p-3 pl-10 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none" 
            />
          </div>

          {/* Status */}
          <div className="relative">
            <label className="block font-semibold text-gray-700">Status</label>
            <select 
              name="status" 
              value={formData.status} 
              onChange={handleChange} 
              required 
              className="w-full p-3 pl-10 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            >
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-3 rounded-lg hover:opacity-70 transition font-semibold shadow-md cursor-pointer">Post Job</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostNewJob;
