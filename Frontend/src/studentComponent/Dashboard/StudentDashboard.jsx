import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';
import API from '../../utils/api';

const StudentDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchMyApps = async () => {
      try {
        const { data } = await API.get('/applications/my-applications');
        setApplications(data);
      } catch (err) {
        console.error("Failed to fetch applications");
      }
    };
    fetchMyApps();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Applications</h1>

        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-sm">
              <tr>
                <th className="px-6 py-3">Company</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3">Applied Date</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {applications.map((app) => (
                <tr key={app._id}>
                  {/* Access nested job details safely using optional chaining (?) */}
                  <td className="px-6 py-4 font-medium text-gray-800">{app.job?.company || "Unknown"}</td>
                  <td className="px-6 py-4 text-gray-600">{app.job?.title || "Unknown"}</td>
                  {/* Format the MongoDB date */}
                  <td className="px-6 py-4 text-gray-500">{new Date(app.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${app.status === 'Shortlisted' ? 'bg-green-100 text-green-700' : 
                        app.status === 'Rejected' ? 'bg-red-100 text-red-700' : 
                        'bg-yellow-100 text-yellow-700'}`}>
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {applications.length === 0 && (
            <p className="text-center py-8 text-gray-500">You haven't applied to any jobs yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;