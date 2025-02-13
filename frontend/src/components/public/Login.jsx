import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="h-[900px] w-full flex items-center justify-center bg-gray-100 p-4">
      {/* Main Container */}
      <div className="bg-white rounded-lg shadow-md flex w-full h-full overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-1/2 hidden md:block">
          <img 
            src="https://img.freepik.com/free-vector/internet-forum-abstract-concept-illustration_335657-3679.jpg" 
            alt="Illustration" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">Login</h1>
          <form id="loginForm" className="space-y-8 m-8" noValidate>
            {/* Email Field */}
            <div>
              <label htmlFor="email" c  
               lassName="block text-gray-700 font-medium">Email</label>
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
                placeholder="Enter your password" 
                required 
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="mt-5 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition hover:cursor-pointer"
            >
              LOGIN
            </button>
          </form>
          {/* Signup & Admin Login Links */}
          <div className="text-center mt-4">
            <p className="text-gray-600">Don't have an Employer's account? <Link to="/signup" className="text-blue-600 font-medium hover:underline">CREATE ONE</Link></p>
            <p className="mt-2"><Link to="/admin/login" className="text-blue-600 font-medium hover:underline">Login as Admin</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
