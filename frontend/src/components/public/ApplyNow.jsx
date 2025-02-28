import { useState } from 'react';

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    resume: null,
    queries: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    setTimeout(() => {
      alert("Application submitted successfully!");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        contact: "",
        portfolio_link: "",
        queries: "",
      });
    }, 1500);
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
            Position Overview
          </h2>
          <div className="prose prose-sm max-w-none text-[#4a5568] space-y-4">
            <div className="rounded-xl bg-gradient-to-br from-[#f8f9fa] to-[#e5deff] p-6 shadow-sm border border-[#9b87f5]/20">
              <p className="text-sm leading-relaxed">Content will be shown here...</p>
            </div>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="md:col-span-2 bg-gradient-to-br from-[#9b87f5]/10 to-[#0EA5E9]/10 p-6 md:p-8 border-l border-[#9b87f5]/20">
          <h2 className="text-2xl font-semibold text-[#1A1F2C] tracking-tight mb-6">
            Apply Now
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
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
                <label className="text-sm font-medium text-[#4a5568]">Contact Number</label>
                <input
                  type="tel"
                  name="contact"
                  placeholder="Your phone number"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="h-11 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-[#9b87f5] transition-all w-full p-3 rounded-lg border border-gray-200 text-black"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#4a5568]">Portfolio Link</label>
                <input
                  type="link"
                  name="link"
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
                  name="queries"
                  placeholder="Any questions or additional information?"
                  value={formData.queries}
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
