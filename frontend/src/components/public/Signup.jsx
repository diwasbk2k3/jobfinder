import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="h-[900px] w-full flex items-center justify-center bg-gray-100 p-4">
      {/* Main Container */}
      <div className="bg-white rounded-lg shadow-md flex w-full h-full overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-1/2 hidden md:block">
          <img 
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg" 
            alt="Illustration" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Right Side - Signup Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">Signup</h1>
          <form id="signupForm" className="space-y-6 m-8" noValidate>
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your full name" 
                required 
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email" 
                required 
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Create a password" 
                required 
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="mt-5 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition hover:cursor-pointer"
            >
              SIGN UP
            </button>
          </form>
          {/* Login Link */}
          <div className="text-center mt-4">
            <p className="text-gray-600">Already have an Employer's account? <Link to="/login" className="text-blue-600 font-medium hover:underline">LOGIN</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
