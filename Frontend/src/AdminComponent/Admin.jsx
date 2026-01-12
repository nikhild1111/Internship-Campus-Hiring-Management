// import React, { useState, useEffect } from 'react';
// import { Search, Filter, Download, Mail, X, CheckCircle, XCircle, Clock, FileText, Users } from 'lucide-react';

// const AdminPanel = () => {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filterStatus, setFilterStatus] = useState('all');
//   const [selectedResume, setSelectedResume] = useState(null);

//   // Load dummy data on component mount
//   useEffect(() => {
//     // Simulating API call with setTimeout
//     setTimeout(() => {
//       const dummyData = [
//         {
//           _id: '1',
//           name: 'Rahul Sharma',
//           email: 'rahul@example.com',
//           college: 'IIT Delhi',
//           cgpa: 8.5,
//           skills: ['React', 'Node.js', 'MongoDB', 'Express'],
//           resumeUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
//           status: 'Applied',
//           appliedAt: '2024-01-08'
//         },
//         {
//           _id: '2',
//           name: 'Priya Patel',
//           email: 'priya@example.com',
//           college: 'NIT Trichy',
//           cgpa: 8.8,
//           skills: ['Python', 'Django', 'PostgreSQL'],
//           resumeUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
//           status: 'Shortlisted',
//           appliedAt: '2024-01-09'
//         },
//         {
//           _id: '3',
//           name: 'Raj Kumar',
//           email: 'raj@example.com',
//           college: 'BITS Pilani',
//           cgpa: 8.9,
//           skills: ['Java', 'Spring Boot', 'MySQL', 'Docker'],
//           resumeUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
//           status: 'Rejected',
//           appliedAt: '2024-01-07'
//         },
//         {
//           _id: '4',
//           name: 'Sneha Gupta',
//           email: 'sneha@example.com',
//           college: 'VIT Vellore',
//           cgpa: 9.1,
//           skills: ['React Native', 'Flutter', 'Firebase'],
//           resumeUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
//           status: 'Interview',
//           appliedAt: '2024-01-10'
//         },
//         {
//           _id: '5',
//           name: 'Amit Singh',
//           email: 'amit@example.com',
//           college: 'DTU Delhi',
//           cgpa: 8.2,
//           skills: ['Angular', 'TypeScript', 'AWS'],
//           resumeUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
//           status: 'Applied',
//           appliedAt: '2024-01-11'
//         }
//       ];
//       setApplications(dummyData);
//       setLoading(false);
//     }, 500);
//   }, []);

//   const handleStatusChange = async (applicationId, newStatus) => {
//     try {
//       // TODO: Replace with actual API call
//       // const response = await fetch(`/api/admin/status/${applicationId}`, {
//       //   method: 'PATCH',
//       //   headers: { 'Content-Type': 'application/json' },
//       //   body: JSON.stringify({ status: newStatus })
//       // });
      
//       setApplications(applications.map(app => 
//         app._id === applicationId 
//           ? { ...app, status: newStatus }
//           : app
//       ));
      
//       alert(`Application ${newStatus.toLowerCase()} successfully!`);
//     } catch (error) {
//       console.error('Error updating status:', error);
//       alert('Failed to update application status');
//     }
//   };

//   const getStatusBadgeClass = (status) => {
//     const baseClass = "px-3 py-1 text-xs font-semibold rounded-full ";
//     switch(status) {
//       case 'Applied':
//         return baseClass + "bg-blue-100 text-blue-800";
//       case 'Shortlisted':
//         return baseClass + "bg-green-100 text-green-800";
//       case 'Interview':
//         return baseClass + "bg-purple-100 text-purple-800";
//       case 'Rejected':
//         return baseClass + "bg-red-100 text-red-800";
//       case 'Hired':
//         return baseClass + "bg-yellow-100 text-yellow-800";
//       default:
//         return baseClass + "bg-gray-100 text-gray-800";
//     }
//   };

//   const filteredApplications = applications.filter(app => {
//     const matchesSearch = 
//       app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       app.college.toLowerCase().includes(searchQuery.toLowerCase());
    
//     const matchesStatus = filterStatus === 'all' || app.status === filterStatus;
    
//     return matchesSearch && matchesStatus;
//   });

//   const stats = {
//     total: applications.length,
//     applied: applications.filter(a => a.status === 'Applied').length,
//     shortlisted: applications.filter(a => a.status === 'Shortlisted').length,
//     rejected: applications.filter(a => a.status === 'Rejected').length,
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
//         <div className="text-white text-xl">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       <div className="max-w-7xl mx-auto p-6">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
//           <p className="text-gray-300">Manage job applications and candidate profiles</p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//           <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-6 border border-white border-opacity-20">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-300">Total Applications</p>
//                 <p className="text-3xl font-bold text-white">{stats.total}</p>
//               </div>
//               <Users className="w-10 h-10 text-blue-400" />
//             </div>
//           </div>
          
//           <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-6 border border-white border-opacity-20">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-300">Applied</p>
//                 <p className="text-3xl font-bold text-white">{stats.applied}</p>
//               </div>
//               <Clock className="w-10 h-10 text-yellow-400" />
//             </div>
//           </div>
          
//           <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-6 border border-white border-opacity-20">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-300">Shortlisted</p>
//                 <p className="text-3xl font-bold text-white">{stats.shortlisted}</p>
//               </div>
//               <CheckCircle className="w-10 h-10 text-green-400" />
//             </div>
//           </div>
          
//           <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-6 border border-white border-opacity-20">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-300">Rejected</p>
//                 <p className="text-3xl font-bold text-white">{stats.rejected}</p>
//               </div>
//               <XCircle className="w-10 h-10 text-red-400" />
//             </div>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-col md:flex-row gap-4 mb-6">
//           <div className="relative flex-1">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type="text"
//               placeholder="Search by name, email, or college..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>
          
//           <select
//             value={filterStatus}
//             onChange={(e) => setFilterStatus(e.target.value)}
//             className="px-4 py-3 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//           >
//             <option value="all" className="bg-slate-800">All Status</option>
//             <option value="Applied" className="bg-slate-800">Applied</option>
//             <option value="Shortlisted" className="bg-slate-800">Shortlisted</option>
//             <option value="Interview" className="bg-slate-800">Interview</option>
//             <option value="Rejected" className="bg-slate-800">Rejected</option>
//             <option value="Hired" className="bg-slate-800">Hired</option>
//           </select>
//         </div>

//         {/* Applications Table */}
//         <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden border border-white border-opacity-20">
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-white divide-opacity-10">
//               <thead className="bg-white bg-opacity-5">
//                 <tr>
//                   <th className="px-6 py-4 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
//                     Candidate
//                   </th>
//                   <th className="px-6 py-4 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
//                     College
//                   </th>
//                   <th className="px-6 py-4 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
//                     CGPA
//                   </th>
//                   <th className="px-6 py-4 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
//                     Skills
//                   </th>
//                   <th className="px-6 py-4 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
//                     Status
//                   </th>
//                   <th className="px-6 py-4 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-white divide-opacity-10">
//                 {filteredApplications.map((app) => (
//                   <tr key={app._id} className="hover:bg-white hover:bg-opacity-5 transition-colors">
//                     <td className="px-6 py-4">
//                       <div>
//                         <div className="font-medium text-white">{app.name}</div>
//                         <div className="text-sm text-gray-300">{app.email}</div>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 text-sm text-gray-200">{app.college}</td>
//                     <td className="px-6 py-4">
//                       <span className="text-sm font-semibold text-white">{app.cgpa}</span>
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="flex flex-wrap gap-1">
//                         {app.skills.slice(0, 3).map((skill, idx) => (
//                           <span
//                             key={idx}
//                             className="px-2 py-1 text-xs bg-blue-500 bg-opacity-30 text-blue-200 rounded border border-blue-400 border-opacity-30"
//                           >
//                             {skill}
//                           </span>
//                         ))}
//                         {app.skills.length > 3 && (
//                           <span className="px-2 py-1 text-xs bg-gray-500 bg-opacity-30 text-gray-200 rounded border border-gray-400 border-opacity-30">
//                             +{app.skills.length - 3}
//                           </span>
//                         )}
//                       </div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <span className={getStatusBadgeClass(app.status)}>
//                         {app.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="flex gap-2">
//                         <button
//                           onClick={() => setSelectedResume(app.resumeUrl)}
//                           className="p-2 text-blue-400 hover:bg-blue-500 hover:bg-opacity-20 rounded transition-colors"
//                           title="View Resume"
//                         >
//                           <FileText size={18} />
//                         </button>
//                         <button
//                           onClick={() => handleStatusChange(app._id, 'Shortlisted')}
//                           className="p-2 text-green-400 hover:bg-green-500 hover:bg-opacity-20 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                           title="Shortlist"
//                           disabled={app.status === 'Shortlisted' || app.status === 'Hired'}
//                         >
//                           <CheckCircle size={18} />
//                         </button>
//                         <button
//                           onClick={() => handleStatusChange(app._id, 'Rejected')}
//                           className="p-2 text-red-400 hover:bg-red-500 hover:bg-opacity-20 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                           title="Reject"
//                           disabled={app.status === 'Rejected'}
//                         >
//                           <XCircle size={18} />
//                         </button>
//                         <button
//                           onClick={() => alert(`Sending interview email to ${app.email}...\n\nAPI Endpoint: POST /api/admin/send-email\nPayload: { to: "${app.email}", type: "interview" }`)}
//                           className="p-2 text-purple-400 hover:bg-purple-500 hover:bg-opacity-20 rounded transition-colors"
//                           title="Send Interview Email"
//                         >
//                           <Mail size={18} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {filteredApplications.length === 0 && (
//           <div className="text-center py-12 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg border border-white border-opacity-20 mt-6">
//             <p className="text-gray-300 text-lg">No applications found matching your criteria.</p>
//           </div>
//         )}
//       </div>

//       {/* Resume Viewer Modal */}
//       {selectedResume && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg max-w-4xl w-full h-5/6 flex flex-col shadow-2xl">
//             <div className="flex justify-between items-center p-4 border-b bg-gradient-to-r from-purple-600 to-blue-600 rounded-t-lg">
//               <h3 className="text-lg font-semibold text-white">Resume Viewer</h3>
//               <button
//                 onClick={() => setSelectedResume(null)}
//                 className="p-2 hover:bg-white hover:bg-opacity-20 rounded transition-colors text-white"
//               >
//                 <X size={24} />
//               </button>
//             </div>
//             <div className="flex-1 overflow-auto p-4">
//               <iframe
//                 src={selectedResume}
//                 className="w-full h-full border-0 rounded"
//                 title="Resume"
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminPanel;




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Briefcase, MapPin, DollarSign, Calendar, Clock, Building, Send, CheckCircle, User, LogOut, LayoutDashboard, LogIn, UserPlus, X, Mail, Lock, Phone, GraduationCap, Shield, FileText, Download, Check, XCircle, Search, Filter } from 'lucide-react';

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

// Dummy Applications Data
const dummyApplications = [
  {
    _id: 'app1',
    jobId: '1',
    userId: 'user1',
    user: {
      _id: 'user1',
      name: 'Rahul Sharma',
      email: 'rahul.sharma@example.com',
      phone: '+91 98765 43210',
      college: 'IIT Delhi',
      cgpa: '8.5',
      degree: 'B.Tech Computer Science',
      graduationYear: '2025',
      skills: ['React.js', 'JavaScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      resumeUrl: 'https://example.com/resume/rahul.pdf',
      github: 'github.com/rahulsharma',
      linkedin: 'linkedin.com/in/rahulsharma'
    },
    appliedDate: '2024-01-15T10:30:00Z',
    status: 'pending',
    coverLetter: 'I am very interested in this position and have 2 years of experience with React...'
  },
  {
    _id: 'app2',
    jobId: '1',
    userId: 'user2',
    user: {
      _id: 'user2',
      name: 'Priya Patel',
      email: 'priya.patel@example.com',
      phone: '+91 87654 32109',
      college: 'NIT Trichy',
      cgpa: '9.2',
      degree: 'B.Tech Information Technology',
      graduationYear: '2024',
      skills: ['React.js', 'TypeScript', 'Redux', 'Git', 'Figma'],
      resumeUrl: 'https://example.com/resume/priya.pdf',
      github: 'github.com/priyapatel',
      linkedin: 'linkedin.com/in/priyapatel'
    },
    appliedDate: '2024-01-16T14:20:00Z',
    status: 'pending',
    coverLetter: 'As a frontend developer with strong design skills, I would love to contribute...'
  },
  {
    _id: 'app3',
    jobId: '1',
    userId: 'user3',
    user: {
      _id: 'user3',
      name: 'Amit Kumar',
      email: 'amit.kumar@example.com',
      phone: '+91 76543 21098',
      college: 'BITS Pilani',
      cgpa: '8.8',
      degree: 'B.Tech Computer Science',
      graduationYear: '2025',
      skills: ['React.js', 'JavaScript', 'CSS', 'HTML', 'REST APIs'],
      resumeUrl: 'https://example.com/resume/amit.pdf',
      github: 'github.com/amitkumar',
      linkedin: 'linkedin.com/in/amitkumar'
    },
    appliedDate: '2024-01-17T09:15:00Z',
    status: 'selected',
    coverLetter: 'I have built several React projects and am excited about this opportunity...'
  },
  {
    _id: 'app4',
    jobId: '2',
    userId: 'user4',
    user: {
      _id: 'user4',
      name: 'Sneha Reddy',
      email: 'sneha.reddy@example.com',
      phone: '+91 65432 10987',
      college: 'IIIT Hyderabad',
      cgpa: '9.0',
      degree: 'B.Tech Computer Science',
      graduationYear: '2024',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker'],
      resumeUrl: 'https://example.com/resume/sneha.pdf',
      github: 'github.com/snehareddy',
      linkedin: 'linkedin.com/in/snehareddy'
    },
    appliedDate: '2024-01-14T11:45:00Z',
    status: 'rejected',
    coverLetter: 'I have experience building RESTful APIs and working with databases...'
  }
];

// Admin Login Component
const AdminLoginForm = ({ onClose, onLoginSuccess }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // TODO: API Call for Admin Login
    // const response = await fetch('/api/auth/admin-login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    // const data = await response.json();
    // if (data.token && data.user.role === 'admin') {
    //   localStorage.setItem('adminToken', data.token);
    //   localStorage.setItem('admin', JSON.stringify(data.user));
    //   onLoginSuccess(data.user);
    // }

    // Dummy admin login - accept any email ending with @admin.com
    if (formData.email.endsWith('@admin.com')) {
      const adminUser = {
        id: 'admin123',
        name: 'Admin',
        email: formData.email,
        role: 'admin'
      };
      localStorage.setItem('admin', JSON.stringify(adminUser));
      onLoginSuccess(adminUser);
      alert('✅ Admin login successful!');
    } else {
      alert('❌ Invalid admin credentials!');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>
        
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Admin Login</h2>
          <p className="text-gray-600 mt-2">Access admin dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Admin Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="admin@admin.com"
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
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter admin password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all"
          >
            Login as Admin
          </button>
        </form>
      </div>
    </div>
  );
};

// Application Detail Modal
const ApplicationDetailModal = ({ application, job, onClose, onStatusChange }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [actionType, setActionType] = useState('');

  const handleStatusChange = async (status) => {
    setActionType(status);
    setShowConfirm(true);
  };

  const confirmStatusChange = async () => {
    // TODO: API Call to update application status
    // const response = await fetch(`/api/applications/${application._id}/status`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
    //   },
    //   body: JSON.stringify({ status: actionType })
    // });
    // const data = await response.json();

    // TODO: API Call to send email notification
    // await fetch('/api/notifications/send-email', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
    //   },
    //   body: JSON.stringify({
    //     to: application.user.email,
    //     subject: actionType === 'selected' 
    //       ? `Congratulations! You've been selected for ${job.title}` 
    //       : `Application Update for ${job.title}`,
    //     body: actionType === 'selected'
    //       ? `Dear ${application.user.name}, We are pleased to inform you that you have been selected for the position of ${job.title} at ${job.company}...`
    //       : `Dear ${application.user.name}, Thank you for your interest in ${job.title} at ${job.company}. Unfortunately, we have decided to move forward with other candidates...`
    //   })
    // });

    alert(`✅ Application ${actionType}! Email sent to ${application.user.email}`);
    onStatusChange(application._id, actionType);
    setShowConfirm(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-8 relative my-8">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>

        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Application Details</h2>
          <p className="text-gray-600">
            For: <span className="font-semibold">{job.title}</span> at {job.company}
          </p>
          <span className={`inline-block mt-2 px-4 py-1 rounded-full text-sm font-semibold ${
            application.status === 'selected' ? 'bg-green-100 text-green-700' :
            application.status === 'rejected' ? 'bg-red-100 text-red-700' :
            'bg-yellow-100 text-yellow-700'
          }`}>
            Status: {application.status.toUpperCase()}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Personal Information */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <User size={24} className="text-blue-600" />
              Personal Information
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Full Name</p>
                <p className="font-semibold text-gray-800">{application.user.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-semibold text-gray-800">{application.user.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-semibold text-gray-800">{application.user.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Applied On</p>
                <p className="font-semibold text-gray-800">
                  {new Date(application.appliedDate).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Education Information */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <GraduationCap size={24} className="text-purple-600" />
              Education
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">College/University</p>
                <p className="font-semibold text-gray-800">{application.user.college}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Degree</p>
                <p className="font-semibold text-gray-800">{application.user.degree}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">CGPA</p>
                <p className="font-semibold text-gray-800">{application.user.cgpa} / 10</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Graduation Year</p>
                <p className="font-semibold text-gray-800">{application.user.graduationYear}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {application.user.skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Cover Letter */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Cover Letter</h3>
          <p className="text-gray-700 whitespace-pre-wrap">{application.coverLetter}</p>
        </div>

        {/* Links & Resume */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Links & Documents</h3>
          <div className="space-y-3">
            <a
              href={application.user.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              <Download size={20} />
              Download Resume
            </a>
            {application.user.github && (
              <a
                href={`https://${application.user.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
              >
                GitHub: {application.user.github}
              </a>
            )}
            {application.user.linkedin && (
              <a
                href={`https://${application.user.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
              >
                LinkedIn: {application.user.linkedin}
              </a>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        {application.status === 'pending' && (
          <div className="flex gap-4">
            <button
              onClick={() => handleStatusChange('selected')}
              className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center gap-2"
            >
              <Check size={20} />
              Select Candidate
            </button>
            <button
              onClick={() => handleStatusChange('rejected')}
              className="flex-1 bg-gradient-to-r from-red-600 to-rose-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-rose-700 transition-all flex items-center justify-center gap-2"
            >
              <XCircle size={20} />
              Reject Application
            </button>
          </div>
        )}

        {/* Confirmation Dialog */}
        {showConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Confirm Action</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to <span className="font-semibold">{actionType}</span> this application?
                <br />
                <br />
                An email notification will be sent to <span className="font-semibold">{application.user.email}</span>
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmStatusChange}
                  className={`flex-1 text-white py-3 rounded-lg font-semibold transition-all ${
                    actionType === 'selected'
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700'
                      : 'bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700'
                  }`}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
const AddJobModal = ({ onClose, onAdd }) => {
  const [job, setJob] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    stipend: '',
  });

  const handleSubmit = () => {
    onAdd({
      ...job,
      _id: Date.now().toString(),
      openings: 1,
      postedDate: new Date().toISOString()
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Add New Job</h2>

        {['title','company','location','stipend'].map((field) => (
          <input
            key={field}
            placeholder={field.toUpperCase()}
            value={job[field]}
            onChange={(e) => setJob({ ...job, [field]: e.target.value })}
            className="w-full mb-3 px-4 py-3 border rounded-lg"
          />
        ))}

        <div className="flex gap-3 mt-4">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 py-3 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg"
          >
            Add Job
          </button>
        </div>
      </div>
    </div>
  );
};

// Admin Panel Component
const AdminPanel = ({ admin, onLogout }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
const [showAddJob, setShowAddJob] = useState(false);

  const [selectedJob, setSelectedJob] = useState(null);
  const [applications, setApplications] = useState(dummyApplications);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedApplication, setSelectedApplication] = useState(null);

  useEffect(() => {
    // TODO: Fetch all jobs with application counts
    // const fetchJobs = async () => {
    //   const response = await fetch('/api/admin/jobs-with-applications', {
    //     headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
    //   });
    //   const data = await response.json();
    //   setJobs(data);
    // };
    // fetchJobs();
  }, []);

  useEffect(() => {
    if (selectedJob) {
      // TODO: Fetch applications for selected job
      // const fetchApplications = async () => {
      //   const response = await fetch(`/api/admin/jobs/${selectedJob._id}/applications`, {
      //     headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
      //   });
      //   const data = await response.json();
      //   setApplications(data);
      // };
      // fetchApplications();
    }
  }, [selectedJob]);

  const handleStatusChange = (applicationId, newStatus) => {
    setApplications(applications.map(app =>
      app._id === applicationId ? { ...app, status: newStatus } : app
    ));
  };

  const jobsWithCounts = dummyJobs.map(job => ({
    ...job,
    applicationCount: applications.filter(app => app.jobId === job._id).length,
    pendingCount: applications.filter(app => app.jobId === job._id && app.status === 'pending').length,
    selectedCount: applications.filter(app => app.jobId === job._id && app.status === 'selected').length,
    rejectedCount: applications.filter(app => app.jobId === job._id && app.status === 'rejected').length
  }));

  const filteredApplications = selectedJob
    ? applications.filter(app => {
        const matchesJob = app.jobId === selectedJob._id;
        const matchesSearch = app.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            app.user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            app.user.college.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
        return matchesJob && matchesSearch && matchesStatus;
      })
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Admin Header */}
      <header className="bg-gradient-to-r from-red-600 to-orange-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center">
                <Shield className="text-red-600" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-red-100 text-sm">Manage Applications</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right text-white">
                <p className="font-semibold">{admin.name}</p>
                <p className="text-sm text-red-100">{admin.email}</p>
              </div>
    <div className="relative">
  <button
    onClick={() => setShowProfileMenu(!showProfileMenu)}
    className="bg-white text-red-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-md"
  >
    {admin.name.charAt(0).toUpperCase()}
  </button>

  {showProfileMenu && (
    <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg overflow-hidden z-50">
      <button
        onClick={() => {
          setShowAddJob(true);
          setShowProfileMenu(false);
        }}
        className="w-full px-4 py-3 text-left hover:bg-gray-100 flex items-center gap-2"
      >
        <Briefcase size={18} />
        Add Job
      </button>

      <button
        onClick={onLogout}
        className="w-full px-4 py-3 text-left hover:bg-gray-100 flex items-center gap-2 text-red-600"
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  )}
</div>


            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Jobs List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Briefcase size={24} />
                Job Openings
              </h2>
              <div className="space-y-3">
                {jobsWithCounts.map((job) => (
                  <button
                    key={job._id}
                    onClick={() => setSelectedJob(job)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      selectedJob?._id === job._id
                        ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <h3 className={`font-bold mb-1 ${selectedJob?._id === job._id ? 'text-white' : 'text-gray-800'}`}>
                      {job.title}
                    </h3>
                    <p className={`text-sm mb-2 ${selectedJob?._id === job._id ? 'text-red-100' : 'text-gray-600'}`}>
                      {job.company}
                    </p>
                    <div className="flex gap-2 text-xs">
                      <span className={`px-2 py-1 rounded-full ${
                        selectedJob?._id === job._id
                          ? 'bg-white bg-opacity-20 text-white'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        Total: {job.applicationCount}
                      </span>
                      <span className={`px-2 py-1 rounded-full ${
                        selectedJob?._id === job._id
                          ? 'bg-white bg-opacity-20 text-white'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        Pending: {job.pendingCount}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Applications List */}
          <div className="lg:col-span-2">
            {!selectedJob ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <Briefcase size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Select a Job Opening</h3>
                <p className="text-gray-600">Choose a job from the left to view applications</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Applications for {selectedJob.title}
                  </h2>
                  <p className="text-gray-600">{selectedJob.company} • {selectedJob.location}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    <div className="bg-blue-50 rounded-xl p-3">
                      <p className="text-2xl font-bold text-blue-600">{selectedJob.applicationCount}</p>
                      <p className="text-sm text-gray-600">Total</p>
                    </div>
                    <div className="bg-yellow-50 rounded-xl p-3">
                      <p className="text-2xl font-bold text-yellow-600">{selectedJob.pendingCount}</p>
                      <p className="text-sm text-gray-600">Pending</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-3">
                      <p className="text-2xl font-bold text-green-600">{selectedJob.selectedCount}</p>
                      <p className="text-sm text-gray-600">Selected</p>
                    </div>
                    <div className="bg-red-50 rounded-xl p-3">
                      <p className="text-2xl font-bold text-red-600">{selectedJob.rejectedCount}</p>
                      <p className="text-sm text-gray-600">Rejected</p>
                    </div>
                  </div>
                </div>

                {/* Search and Filter */}
                <div className="flex gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search by name, email, or college..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div className="relative">
                    <Filter className="absolute left-3 top-3 text-gray-400" size={20} />
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none bg-white"
                    >
                      <option value="all">All Status</option>
                      <option value="pending">Pending</option>
                      <option value="selected">Selected</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </div>
                </div>

                {/* Applications */}
                <div className="space-y-4 max-h-[600px] overflow-y-auto">
                  {filteredApplications.length === 0 ? (
                    <div className="text-center py-12">
                      <User size={48} className="mx-auto text-gray-300 mb-3" />
                      <p className="text-gray-600">No applications found</p>
                    </div>
                  ) : (
                    filteredApplications.map((app) => (
                      <div
                        key={app._id}
                        className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all cursor-pointer"
                        onClick={() => setSelectedApplication(app)}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-lg font-bold text-gray-800">{app.user.name}</h3>
                            <p className="text-sm text-gray-600">{app.user.email}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            app.status === 'selected' ? 'bg-green-100 text-green-700' :
                            app.status === 'rejected' ? 'bg-red-100 text-red-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {app.status.toUpperCase()}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-3">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone size={16} />
                            {app.user.phone}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <GraduationCap size={16} />
                            CGPA: {app.user.cgpa}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Building size={16} />
                            {app.user.college}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar size={16} />
                            {app.user.graduationYear}
                          </div>
                        </div>

                        <div className="mb-3">
                          <p className="text-xs text-gray-500 mb-2">Skills:</p>
                          <div className="flex flex-wrap gap-1">
                            {app.user.skills.slice(0, 5).map((skill, idx) => (
                              <span key={idx} className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs">
                                {skill}
                              </span>
                            ))}
                            {app.user.skills.length > 5 && (
                              <span className="text-xs text-gray-500">+{app.user.skills.length - 5} more</span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>Applied: {new Date(app.appliedDate).toLocaleDateString('en-IN')}</span>
                          <span className="text-blue-600 font-semibold">Click to view details →</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Application Detail Modal */}
      {selectedApplication && (
        <ApplicationDetailModal
          application={selectedApplication}
          job={selectedJob}
          onClose={() => setSelectedApplication(null)}
          onStatusChange={handleStatusChange}
        />
      )}
      {showAddJob && (
  <AddJobModal
    onClose={() => setShowAddJob(false)}
    onAdd={(newJob) => {
      alert('✅ Job Added (dummy)');
      console.log(newJob);
    }}
  />
)}

    </div>
  );
};

// Main App Component
const InternshipPortal = () => {
  const navigate = useNavigate();   // ✅ ADD THIS
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    // Check if admin is already logged in
    const savedAdmin = localStorage.getItem('admin');
    if (savedAdmin) {
      setAdmin(JSON.parse(savedAdmin));
    }
  }, []);

const handleAdminLogin = (adminUser) => {
  setAdmin(adminUser);
  setShowAdminLogin(false);
  navigate('/admin');   // ✅ ADD THIS
};

 const handleAdminLogout = () => {
  localStorage.removeItem('admin');
  setAdmin(null);
  navigate('/');   // ✅ ADD THIS
};

  if (admin) {
    return <AdminPanel admin={admin} onLogout={handleAdminLogout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="text-white" size={48} />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Admin Portal</h1>
          <p className="text-gray-600 mb-8">
            Manage internship applications and review candidates
          </p>
          <button
            onClick={() => setShowAdminLogin(true)}
            className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-700 hover:to-orange-700 transition-all flex items-center justify-center gap-2 mx-auto shadow-lg"
          >
            <LogIn size={24} />
            Admin Login
          </button>
          <p className="text-sm text-gray-500 mt-6">
            Use email ending with @admin.com for demo
          </p>
        </div>
      </div>

      {showAdminLogin && (
        <AdminLoginForm
          onClose={() => setShowAdminLogin(false)}
          onLoginSuccess={handleAdminLogin}
        />
      )}
    </div>
  );
};

export default InternshipPortal