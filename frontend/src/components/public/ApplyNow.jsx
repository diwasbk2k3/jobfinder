import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom"; // Import useLocation
import { toast } from "react-toastify";

const ApplyNow = () => {
  const location = useLocation(); // Initialize useLocation
  const job = location.state?.job; // Access job details from location.state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    job_id: job ? job.job_id : "",
    job_title: job ? job.job_title : "",
    employer_id: job ? job.employer_id : "",
    name: "",
    email: "",
    phone: "",
    portfolio_link: "",
    additional_info: "",
  });


  useEffect(() => {
    if (job) {
      console.log("Job data:", job);
      setFormData((prevFormData) => ({
        ...prevFormData,
        job_id: job.job_id,
        job_title: job.job_title,
        employer_id: job.employer_id,
      }));
    } else {
      console.error("No job data available");
    }
  }, [job]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:5000/applicants", formData, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success("Application submitted successfully!");
      setFormData({
        job_id: job ? job.job_id : "", 
        job_title: job ? job.job_title : "", 
        employer_id: job ? job.employer_id : "",
        name: "",
        email: "",
        phone: "",
        portfolio_link: "",
        additional_info: "",
      });

    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e7f0fd] to-[#accbee] p-4 sm:p-6 md:p-8 flex justify-center items-center">
      <div className="w-full max-w-6xl grid md:grid-cols-5 gap-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/20">
        {/* Job Details Section */}
        <div className="md:col-span-3 p-6 md:p-8 space-y-6">
          <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] text-white rounded-full inline-block">
            Job Details
          </span>
          <h2 className="text-2xl font-semibold text-[#1A1F2C] tracking-tight">
            {job ? job.job_title : "Position Overview"}
          </h2>
          <div className="prose prose-sm max-w-none text-[#4a5568] space-y-4">
            <div className="rounded-xl bg-gradient-to-br from-[#f8f9fa] to-[#e5deff] p-6 shadow-sm border border-[#9b87f5]/20">
              {job ? (
                <>
                  <p className="text-sm leading-relaxed">
                    <strong>Job ID:</strong> {job.job_id}
                  </p>
                  <p className="text-sm leading-relaxed">
                    <strong>Owner:</strong> {job.owner}
                  </p>
                  <p className="text-sm leading-relaxed">
                    <strong>Employment:</strong> {job.job_type}
                  </p>
                  <p className="text-sm leading-relaxed">
                    <strong>Location:</strong> {job.location}
                  </p>
                  <p className="text-sm leading-relaxed">
                    <strong>Salary:</strong> {job.salary}
                  </p>
                  <p className="text-sm leading-relaxed">
                    <strong>Skills:</strong> {job.skills}
                  </p>
                  <p className="text-sm leading-relaxed">
                    <strong>Deadline:</strong> {new Date(job.deadline).toISOString().split("T")[0]}
                  </p>
                  <p className="text-sm leading-relaxed">
                    <strong>Status:</strong> {job.status}
                  </p>
                  <p className="text-sm leading-relaxed">
                    <strong>Description:</strong> {job.description}
                  </p>
                </>
              ) : (
                <p className="text-sm leading-relaxed">No job details available.</p>
              )}
            </div>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="md:col-span-2 bg-gradient-to-br from-[#9b87f5]/10 to-[#0EA5E9]/10 p-6 md:p-8 border-l border-[#9b87f5]/20">
          <h2 className="text-2xl font-semibold text-[#1A1F2C] tracking-tight mb-6">
            Apply Now
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Hidden job_id and job_title fields */}
            <input type="hidden" name="job_id" value={formData.job_id} />
            <input type="hidden" name="job_title" value={formData.job_title} />

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#4a5568]">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-11 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-[#9b87f5] transition-all w-full p-3 rounded-lg border border-gray-200 text-black"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#4a5568]">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-11 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-[#9b87f5] transition-all w-full p-3 rounded-lg border border-gray-200 text-black"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#4a5568]">phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-11 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-[#9b87f5] transition-all w-full p-3 rounded-lg border border-gray-200 text-black"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#4a5568]">Portfolio Link</label>
                <input
                  type="text"
                  name="portfolio_link"
                  placeholder="github/website link"
                  value={formData.portfolio_link}
                  onChange={handleChange}
                  required
                  className="h-11 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-[#9b87f5] transition-all w-full p-3 rounded-lg border border-gray-200 text-black"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#4a5568]">Additional Information</label>
                <textarea
                  name="additional_info" // This should match the form data field name
                  placeholder="Any questions or additional information?"
                  value={formData.additional_info}
                  onChange={handleChange}
                  className="min-h-[120px] bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-[#9b87f5] transition-all w-full p-3 rounded-lg border border-gray-200 text-black resize-none"
                ></textarea>

              </div>

            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 bg-gradient-to-r from-[#9b87f5] to-[#0EA5E9] hover:from-[#8B5CF6] hover:to-[#0EA5E9] text-white transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 rounded-lg"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
