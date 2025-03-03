import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Footer from './Footer'; // Importing Footer component

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/contacts', formData);
      toast.success(response.data.message);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      toast.error(err.response?.data?.error || 'Something went wrong', { position: 'top-right' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 pt-5">
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h1>
          <p className="text-gray-600 mb-6">Have questions? Fill out the form and we’ll reach out soon.</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder="Full Name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input 
              type="text" 
              name="phone"
              placeholder="Contact Number" 
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea 
              name="message"
              placeholder="Your Message" 
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[120px]"
              required
            />
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-md hover:cursor-pointer">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className='mt-6'>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
