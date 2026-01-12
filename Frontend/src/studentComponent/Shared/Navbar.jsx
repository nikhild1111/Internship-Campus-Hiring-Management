import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!token) return null; // Don't show navbar on login/register pages

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/student/dashboard" className="text-2xl font-bold text-blue-600">
          CampusHire 🎓
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link to="/student/dashboard" className="text-gray-600 hover:text-blue-600 font-medium">
            Dashboard
          </Link>
          <Link to="/student/jobs" className="text-gray-600 hover:text-blue-600 font-medium">
            Internships
          </Link>
          <Link to="/student/profile" className="text-gray-600 hover:text-blue-600 font-medium">
            Profile
          </Link>
          <button 
            onClick={handleLogout}
            className="bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;