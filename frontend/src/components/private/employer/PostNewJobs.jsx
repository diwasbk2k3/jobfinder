import React, { useState } from "react";

function PostNewJob() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    jobType: "",
    location: "",
    salary: "",
    description: "",
    skills: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, logo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-10">
      <div className="w-full max-w-full bg-white shadow-lg p-10 border border-gray-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Post a New Job</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Job Title */}
          <div className="relative">
            <label className="block font-semibold text-gray-700">Job Title</label>
            <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required className="w-full p-3 pl-10 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none" />
            <i className="fas fa-briefcase text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/90"></i>
          </div>
          {/* Owner Name */}
          <div className="relative">
            <label className="block font-semibold text-gray-700">Owner Name</label>
            <input type="text" name="ownerName" value={formData.companyName} onChange={handleChange} required className="w-full p-3 pl-10 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none" />
            <i className="fas fa-building text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/90"></i>
          </div>
          {/* Job Type */}
          <div className="relative">
            <label className="block font-semibold text-gray-700">Job Type</label>
            <select name="jobType" value={formData.jobType} onChange={handleChange} required className="w-full p-3 pl-10 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none">
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
            <input type="text" name="location" value={formData.location} onChange={handleChange} required className="w-full p-3 pl-10 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none" />
            <i className="fas fa-map-marker-alt text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/90"></i>
          </div>
          {/* Salary */}
          <div className="relative">
            <label className="block font-semibold text-gray-700">Salary</label>
            <input type="date" name="salary" onChange={handleChange} required className="w-full p-3 pl-10 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none" />
            <i className="fas fa-dollar-sign text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/90"></i>
          </div>

          {/* Required Skills */}
          <div className="md:col-span-2 relative">
            <label className="block font-semibold text-gray-700">Required Skills (comma-separated)</label>
            <input type="text" name="skills" value={formData.skills} onChange={handleChange} required className="w-full p-3 pl-10 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none" />
            <i className="fas fa-user-alt text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/90"></i>
          </div>

          {/* Job Description */}
          <div className="md:col-span-2 relative">
            <label className="block font-semibold text-gray-700">Job Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required className="w-full p-3 pl-10 border rounded-lg h-40 bg-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none"></textarea>
            <i className="fas fa-file-alt text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/90"></i>
          </div>

          {/* Application Deadline */}
          <div className="relative">
            <label className="block font-semibold text-gray-700">Application Deadline</label>
            <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} required className="w-full p-3 pl-10 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none" />
            <i className="fas fa-calendar-alt text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/90"></i>
          </div>
          {/* Status */}
          <div className="md:col-span-2 relative">
            <label className="block font-semibold text-gray-700">Status</label>
            <select name="status" value={formData.status} onChange={handleChange} required className="w-full p-3 pl-10 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none">
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
