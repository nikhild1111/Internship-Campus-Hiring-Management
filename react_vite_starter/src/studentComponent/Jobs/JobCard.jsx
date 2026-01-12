import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Briefcase, MapPin, DollarSign, Calendar, Clock, Building, Send, CheckCircle, User, LogOut, LayoutDashboard, LogIn, UserPlus, X, Mail, Lock, Phone, GraduationCap } from 'lucide-react';

// Dummy Jobs Data
const dummyJobs = [
  {
    _id: '1',
    title: 'Frontend Developer Intern',
    company: 'Tech Innovators Pvt Ltd',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    duration: '6 months',
    stipend: '₹25,000/month',
    description: 'Work on cutting-edge React applications and contribute to our design system.',
    requirements: ['React.js', 'JavaScript', 'Tailwind CSS', 'Git'],
    postedDate: '2024-01-10',
    deadline: '2024-02-15',
    openings: 3
  },
  {
    _id: '2',
    title: 'Backend Development Intern',
    company: 'CloudScale Solutions',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    duration: '6 months',
    stipend: '₹30,000/month',
    description: 'Build scalable APIs and work with microservices architecture.',
    requirements: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
    postedDate: '2024-01-09',
    deadline: '2024-02-20',
    openings: 2
  },
  {
    _id: '3',
    title: 'Data Science Intern',
    company: 'AI Ventures Inc',
    location: 'Hyderabad, Telangana',
    type: 'Part-time',
    duration: '4 months',
    stipend: '₹20,000/month',
    description: 'Work on machine learning models and data analysis projects.',
    requirements: ['Python', 'Pandas', 'Machine Learning', 'SQL'],
    postedDate: '2024-01-08',
    deadline: '2024-02-10',
    openings: 5
  },
  {
    _id: '4',
    title: 'Mobile App Developer',
    company: 'AppMasters Studio',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    duration: '6 months',
    stipend: '₹28,000/month',
    description: 'Develop cross-platform mobile applications using React Native.',
    requirements: ['React Native', 'JavaScript', 'Redux', 'Firebase'],
    postedDate: '2024-01-11',
    deadline: '2024-02-25',
    openings: 2
  },
  {
    _id: '5',
    title: 'UI/UX Design Intern',
    company: 'Creative Minds Design',
    location: 'Remote',
    type: 'Full-time',
    duration: '5 months',
    stipend: '₹22,000/month',
    description: 'Design beautiful and intuitive user interfaces for web and mobile apps.',
    requirements: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    postedDate: '2024-01-12',
    deadline: '2024-03-01',
    openings: 3
  },
  {
    _id: '6',
    title: 'DevOps Engineer Intern',
    company: 'Infrastructure Pro',
    location: 'Delhi NCR',
    type: 'Full-time',
    duration: '6 months',
    stipend: '₹32,000/month',
    description: 'Manage cloud infrastructure and automate deployment pipelines.',
    requirements: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    postedDate: '2024-01-07',
    deadline: '2024-02-12',
    openings: 2
  }
];

// Login Component

  const LoginForm = ({ onClose, onSwitchToSignup, onLoginSuccess }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dummyUser = {
      id: '123',
      name: formData.email.split('@')[0],
      email: formData.email,
      role: 'student'
    };
    localStorage.setItem('user', JSON.stringify(dummyUser));
    onLoginSuccess(dummyUser);
    alert('✅ Login successful!');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>
        
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <LogIn className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Login to continue your journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
          >
            Login
          </button>
        </form>

     <p className="text-center mt-6 text-gray-600">
  Don't have an account?{' '}
  <button
    onClick={onSwitchToSignup}
    className="text-blue-600 font-semibold hover:underline"
  >
    Sign up
  </button>
</p>

<div className="mt-4 text-center">
  <button
    onClick={() => {
      onClose();
      navigate('/admin');
    }}
    className="text-red-600 font-semibold hover:underline"
  >
    Login as Admin
  </button>
</div>

      </div>
    </div>
  );
};

// Signup Component
const SignupForm = ({ onClose, onSwitchToLogin, onSignupSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    college: '',
    cgpa: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dummyUser = {
      id: '123',
      name: formData.name,
      email: formData.email,
      college: formData.college,
      cgpa: formData.cgpa,
      role: 'student'
    };
    localStorage.setItem('user', JSON.stringify(dummyUser));
    onSignupSuccess(dummyUser);
    alert('✅ Account created successfully!');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative my-8">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>
        
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserPlus className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
          <p className="text-gray-600 mt-2">Start your internship journey today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Create a strong password"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">College/University</label>
            <div className="relative">
              <GraduationCap className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                required
                value={formData.college}
                onChange={(e) => setFormData({...formData, college: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="IIT Delhi"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">CGPA</label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="10"
              required
              value={formData.cgpa}
              onChange={(e) => setFormData({...formData, cgpa: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="8.5"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all"
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{' '}
          <button onClick={onSwitchToLogin} className="text-blue-600 font-semibold hover:underline">
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

// Dashboard Component
const Dashboard = ({ user, onLogout, onClose }) => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const appliedJobIds = JSON.parse(localStorage.getItem('appliedJobs') || '[]');
    const appliedJobsData = dummyJobs.filter(job => appliedJobIds.includes(job._id));
    setApplications(appliedJobsData.map(job => ({
      ...job,
      status: 'Applied',
      appliedDate: new Date().toISOString()
    })));
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-8 relative my-8 max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              {user.college && (
                <p className="text-sm text-gray-500 mt-1">
                  🎓 {user.college} | CGPA: {user.cgpa}
                </p>
              )}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Briefcase size={28} />
            My Applications ({applications.length})
          </h3>

          {applications.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <Briefcase size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-600 mb-6">You haven't applied to any jobs yet.</p>
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                Browse Jobs
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {applications.map((app) => (
                <div key={app._id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{app.title}</h4>
                      <p className="text-gray-600">{app.company}</p>
                    </div>
                    <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                      <CheckCircle size={16} />
                      {app.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Applied on: {new Date(app.appliedDate).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// User Profile Dropdown
const UserProfileDropdown = ({ user, onLogin, onSignup, onDashboard, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
      >
        {user ? user.name.charAt(0).toUpperCase() : 'U'}
      </button>

      {isOpen && (
        <>
          <div onClick={() => setIsOpen(false)} className="fixed inset-0 z-10" />
          <div className="absolute right-0 mt-2 w-56 bg-gray-900 rounded-xl shadow-2xl overflow-hidden z-20">
            {!user ? (
              <>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onLogin();
                  }}
                  className="w-full px-4 py-3 text-left text-white hover:bg-gray-800 flex items-center gap-3 transition-colors"
                >
                  <LogIn size={20} />
                  Login
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onSignup();
                  }}
                  className="w-full px-4 py-3 text-left text-white hover:bg-gray-800 flex items-center gap-3 transition-colors border-t border-gray-700"
                >
                  <UserPlus size={20} />
                  Signup
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onDashboard();
                  }}
                  className="w-full px-4 py-3 text-left text-white hover:bg-gray-800 flex items-center gap-3 transition-colors"
                >
                  <LayoutDashboard size={20} />
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onLogout();
                  }}
                  className="w-full px-4 py-3 text-left text-white hover:bg-gray-800 flex items-center gap-3 transition-colors border-t border-gray-700"
                >
                  <LogOut size={20} />
                  Logout
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

// Job Card Component
const JobCard = ({ job, onApply, isApplied }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleApplyClick = () => {
    setShowConfirm(true);
  };

  const confirmApply = () => {
    onApply(job._id);
    setShowConfirm(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-100 relative">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center">
            <Building className="text-white" size={28} />
          </div>
          <div>
            <h3 className="font-bold text-gray-600 text-sm">{job.company}</h3>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <MapPin size={12} />
              {job.location}
            </p>
          </div>
        </div>
        {isApplied && (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <CheckCircle size={14} />
            Applied
          </span>
        )}
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-3">{job.title}</h2>
      <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <DollarSign size={18} className="text-green-600" />
          <span className="font-semibold text-gray-700">{job.stipend}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Clock size={18} className="text-blue-600" />
          <span className="text-gray-600">{job.duration}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Briefcase size={18} className="text-purple-600" />
          <span className="text-gray-600">{job.type}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <User size={18} className="text-orange-600" />
          <span className="text-gray-600">{job.openings} openings</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-700 mb-2">Required Skills</p>
        <div className="flex flex-wrap gap-2">
          {job.requirements.map((skill, index) => (
            <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <Calendar size={14} />
          Application Deadline: {new Date(job.deadline).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })}
        </p>
      </div>

      <div className="mt-4">
        {!isApplied ? (
          <button
            onClick={handleApplyClick}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
          >
            <Send size={18} />
            Apply Now
          </button>
        ) : (
          <button
            disabled
            className="w-full bg-gray-200 text-gray-500 py-3 rounded-xl font-semibold cursor-not-allowed flex items-center justify-center gap-2"
          >
            <CheckCircle size={18} />
            Already Applied
          </button>
        )}
      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Confirm Application</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to apply for{' '}
              <span className="font-semibold text-gray-800">{job.title}</span> at {job.company}?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmApply}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Yes, Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Main App Component
const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setTimeout(() => {
      setJobs(dummyJobs);
      setLoading(false);
    }, 500);

    const applied = JSON.parse(localStorage.getItem('appliedJobs') || '[]');
    setAppliedJobs(applied);
  }, []);

  const handleApply = async (jobId) => {
    if (!user) {
      alert('⚠️ Please login to apply for jobs!');
      setShowLogin(true);
      return;
    }

    try {
      // TODO: API Call to apply
      // const response = await fetch('/api/applications/apply', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${localStorage.getItem('token')}`
      //   },
      //   body: JSON.stringify({ jobId })
      // });
      // const data = await response.json();

      const updatedAppliedJobs = [...appliedJobs, jobId];
      setAppliedJobs(updatedAppliedJobs);
      localStorage.setItem('appliedJobs', JSON.stringify(updatedAppliedJobs));
      alert('✅ Application submitted successfully!');
    } catch (error) {
      console.error('Error applying:', error);
      alert('❌ Failed to submit application. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    alert('👋 Logged out successfully!');
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setShowLogin(false);
  };

  const handleSignupSuccess = (userData) => {
    setUser(userData);
    setShowSignup(false);
  };

  const filteredJobs = jobs.filter(job => {
    const matchesFilter = filterType === 'all' || job.type === filterType;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid mx-auto mb-4"></div>
          <p className="text-gray-600 font-semibold">Loading opportunities...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center">
                <Briefcase className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  InternHub
                </h1>
                <p className="text-xs text-gray-500">Find Your Dream Internship</p>
              </div>
            </div>
            <UserProfileDropdown
              user={user}
              onLogin={() => setShowLogin(true)}
              onSignup={() => setShowSignup(true)}
              onDashboard={() => setShowDashboard(true)}
              onLogout={handleLogout}
            />
          </div>
        </div>
      </header>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by title, company, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilterType('all')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  filterType === 'all'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterType('Full-time')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  filterType === 'Full-time'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Full-time
              </button>
              <button
                onClick={() => setFilterType('Part-time')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  filterType === 'Part-time'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Part-time
              </button>
            </div>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Available Opportunities
          </h2>
          <p className="text-gray-600">
            {filteredJobs.length} internship{filteredJobs.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {filteredJobs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
            <Briefcase size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-600 text-lg">No internships found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <JobCard
                key={job._id}
                job={job}
                onApply={handleApply}
                isApplied={appliedJobs.includes(job._id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modals */}
      {showLogin && (
        <LoginForm
          onClose={() => setShowLogin(false)}
          onSwitchToSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {showSignup && (
        <SignupForm
          onClose={() => setShowSignup(false)}
          onSwitchToLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
          onSignupSuccess={handleSignupSuccess}
        />
      )}

      {showDashboard && (
        <Dashboard
          user={user}
          onLogout={handleLogout}
          onClose={() => setShowDashboard(false)}
        />
      )}
    </div>
  );
};

export default JobList;