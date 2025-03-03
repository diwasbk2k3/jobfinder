import React from "react";

function About() {
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Who Are We?</h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Bridging the gap between talent and opportunity with JobFinder. We're on a mission to revolutionize how people find their dream jobs.
        </p>
      </section>
      
      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto py-12">
        {[
          { title: "Our Mission", text: "At JobFinder, our mission is to bridge the gap between talent and opportunity. We strive to provide job seekers with the best career options while helping businesses find skilled professionals to grow their teams." },
          { title: "What We Offer", text: "Browse jobs, apply easily, and get notified of opportunities. For employers, we provide powerful tools to post job openings and find the right candidates effectively." },
          { title: "Why Choose Us", text: "We provide a user-friendly interface, real-time job listings, and a secure & reliable platform for both job seekers and employers." }
        ].map((feature, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.text}</p>
          </div>
        ))}
      </section>

    </div>
  );
}

export default About;
