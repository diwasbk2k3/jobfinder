import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ManageJobs() {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);  // To track the job being edited
  const [formData, setFormData] = useState({
    jobTitle: '',
    ownerName: '',
    jobType: '', // Job type dropdown
    location: '',
    salary: '',
    skills: '',
    description: '',
    deadline: '', // Date picker
    status: 'Open', // Status dropdown
  });

  // Fetch jobs from the backend and filter based on employer_id
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/jobs');
        const employerIdFromLocalStorage = localStorage.getItem('employer_id');
        const filteredJobs = response.data.filter((job) => job.employer_id === employerIdFromLocalStorage);
        setJobs(filteredJobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  // Set form data when editing a job
  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData({
      jobTitle: job.job_title,
      ownerName: job.owner,
      jobType: job.job_type,
      location: job.location,
      salary: job.salary,
      skills: job.skills,
      description: job.description,
      deadline: job.deadline,
      status: job.status,
    });
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission for editing
  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    const employerId = localStorage.getItem('employer_id');

    try {
      const response = await axios.put(`http://localhost:5000/jobs/${editingJob.job_id}`, {
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

      if (response.status === 200) {
        const updatedJob = response.data.job;
        setJobs(jobs.map((job) => (job.job_id === updatedJob.job_id ? updatedJob : job)));
        setEditingJob(null); // Close the edit form
        setFormData({
          jobTitle: '',
          ownerName: '',
          jobType: '',
          location: '',
          salary: '',
          skills: '',
          description: '',
          deadline: '',
          status: 'Open',
        });
      } else {
        console.error('Error updating job:', response.data.error);
      }
    } catch (err) {
      console.error('Error updating job:', err);
    }
  };

  // Delete job function with confirmation
  const handleDelete = async (jobId) => {
    const confirmDelete = window.confirm('Do you really want to delete this job?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/jobs/${jobId}`);
        setJobs(jobs.filter((job) => job.job_id !== jobId));
      } catch (error) {
        console.error('Error deleting job:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-top justify-center p-5">
      <div className="w-full max-w-full bg-white shadow-lg p-10 border border-gray-200 rounded-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Manage Jobs</h2>

        {/* Job Edit Form */}
        {editingJob && (
          <form onSubmit={handleSubmitEdit} className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Input Fields */}
              {['jobTitle', 'ownerName', 'location', 'salary', 'skills', 'description'].map((field) => (
                <div key={field} className="relative">
                  <label className="block font-semibold text-gray-700">{field.replace(/([A-Z])/g, ' $1')}</label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full p-3 pl-10 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                  />
                </div>
              ))}

              {/* Deadline - Date Picker */}
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

              {/* Job Type - Dropdown */}
              <div className="relative">
                <label className="block font-semibold text-gray-700">Job Type</label>
                <select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                >
                  <option value="">Select Job Type</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              {/* Status - Dropdown */}
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
            </div>
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg mt-4">
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setEditingJob(null)}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg mt-4 ml-4"
            >
              Cancel
            </button>
          </form>
        )}

        {/* Jobs Table */}
        <table className="w-full table-auto border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="p-3 border border-gray-300 text-center">Job ID</th>
              <th className="p-3 border border-gray-300 text-center">Job Title</th>
              <th className="p-3 border border-gray-300 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <tr key={job.job_id}>
                  <td className="p-3 border border-gray-300 text-center">{job.job_id}</td>
                  <td className="p-3 border border-gray-300 text-center">{job.job_title}</td>
                  <td className="p-3 border border-gray-300 text-center">
                    <button
                      onClick={() => handleEdit(job)}
                      className="bg-green-500 text-white py-2 mb-2 px-4 w-[120px] rounded-lg hover:bg-green-400 transition font-semibold shadow-md cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(job.job_id)}
                      className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-400 transition font-semibold shadow-md cursor-pointer ml-4"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-3 text-center text-gray-500">No jobs available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageJobs;
