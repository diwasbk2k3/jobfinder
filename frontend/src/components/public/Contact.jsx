import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h1>
        <p className="text-gray-600 mb-6">Have questions? Fill out the form and we’ll reach out soon.</p>
        
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input 
            type="text" 
            placeholder="Contact Number" 
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea 
            placeholder="Your Message" 
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[120px]"
            required
          />
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact