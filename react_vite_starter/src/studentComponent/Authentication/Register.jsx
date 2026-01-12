import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../utils/api';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match!");
    }

    try {
      // REAL BACKEND CALL
      // We exclude confirmPassword because backend doesn't need it
      await API.post('/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: 'student' // Explicitly tell backend this is a student
      });
      
      alert("Registration Successful! Please Login.");
      navigate('/login');
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  // ... (Keep the JSX return statement exactly the same) ...
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required className="w-full p-3 border rounded"/>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full p-3 border rounded"/>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="w-full p-3 border rounded"/>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required className="w-full p-3 border rounded"/>
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700">Create Account</button>
        </form>
        <p className="mt-4 text-center">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;