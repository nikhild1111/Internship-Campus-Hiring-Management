import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../utils/api'; // Import the bridge

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // REAL BACKEND CALL
      const { data } = await API.post('/auth/login', credentials);
      
      // Save Token & User Info
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Redirect
      navigate('/student/dashboard');
    } catch (err) {
      console.error(err);
      // specific error message from backend
      setError(err.response?.data?.message || "Login failed");
    }
  };

  // ... (Keep the rest of the JSX / Return statement exactly the same as before) ...
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-100">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">Login</h1>
        {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="email" name="email" placeholder="Email" onChange={handleChange} required
            className="w-full p-3 border rounded"
          />
          <input 
            type="password" name="password" placeholder="Password" onChange={handleChange} required
            className="w-full p-3 border rounded"
          />
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700">
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center">
          New here? <Link to="/register" className="text-blue-600">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;