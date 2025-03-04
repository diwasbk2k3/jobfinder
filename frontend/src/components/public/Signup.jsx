import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Footer from './Footer';

function Signup() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !phone || !password || !confirmPassword) {
      toast.error('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/employers/signup', {
        email,
        phone,
        password,
      });
      toast.success('Signup Successful!');
      navigate('/login');
    } catch (error) {
      toast.error(error.response ? error.response.data.error : 'An error occurred');
    }
  };

  return (
    <div>
    <div className="h-[900px] w-full flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md flex w-full h-full overflow-hidden">
        <div className="w-1/2 hidden md:block">
          <img 
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg" 
            alt="Illustration" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">Signup</h1>
          <form className="space-y-6 m-8" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                required 
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number" 
                required 
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium">Create Password</label>
              <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a new password" 
                required 
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password" 
                required 
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button 
              type="submit" 
              className="mt-5 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition hover:cursor-pointer"
            >
              SIGN UP
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="text-gray-600">Already have an Employer's account? <Link to="/login" className="text-blue-600 font-medium hover:underline">LOGIN</Link></p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Signup;
