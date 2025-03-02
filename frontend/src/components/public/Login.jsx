import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Both email and password are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/employers/login', { email, password });
      toast.success('Login Successful!');
      // Store employer ID in local storage or context (optional)
      localStorage.setItem('employer_id', response.data.employer_id);
      navigate('/employer/post-new-job'); // Redirect to employer dashboard
    } catch (error) {
      toast.error(error.response ? error.response.data.error : 'An error occurred');
    }
  };

  return (
    <div className="h-[900px] w-full flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md flex w-full h-full overflow-hidden">
        <div className="w-1/2 hidden md:block">
          <img 
            src="https://img.freepik.com/free-vector/internet-forum-abstract-concept-illustration_335657-3679.jpg" 
            alt="Illustration" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">Login</h1>
          <form className="space-y-8 m-8" onSubmit={handleSubmit} noValidate>
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
              <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password" 
                required 
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button 
              type="submit" 
              className="mt-5 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition hover:cursor-pointer"
            >
              LOGIN
            </button>
          </form>
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
