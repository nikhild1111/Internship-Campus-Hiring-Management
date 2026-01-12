import React, { useState } from 'react';
import Navbar from '../Shared/Navbar';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    college: "PCCOE",
    cgpa: "8.9",
    skills: "React, Node.js, MongoDB",
    resumeLink: "john_resume.pdf" // Placeholder
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        <div className="bg-white max-w-2xl mx-auto rounded-xl shadow-md overflow-hidden">
          <div className="bg-blue-600 px-6 py-4 flex justify-between items-center">
            <h2 className="text-white text-xl font-bold">My Profile</h2>
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className="bg-white text-blue-600 px-4 py-1 rounded-lg text-sm font-semibold hover:bg-blue-50"
            >
              {isEditing ? "Save Changes" : "Edit Profile"}
            </button>
          </div>

          <div className="p-8 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-500 text-sm mb-1">Full Name</label>
                <input 
                  disabled={!isEditing} 
                  name="name"
                  value={profile.name} 
                  onChange={handleChange}
                  className={`w-full p-2 rounded border ${isEditing ? 'border-gray-300' : 'border-transparent bg-transparent'}`} 
                />
              </div>
              <div>
                <label className="block text-gray-500 text-sm mb-1">Email</label>
                <input 
                  disabled 
                  value={profile.email} 
                  className="w-full p-2 rounded border border-transparent bg-transparent text-gray-500" 
                />
              </div>
              <div>
                <label className="block text-gray-500 text-sm mb-1">College</label>
                <input 
                  disabled={!isEditing} 
                  name="college"
                  value={profile.college} 
                  onChange={handleChange}
                  className={`w-full p-2 rounded border ${isEditing ? 'border-gray-300' : 'border-transparent bg-transparent'}`} 
                />
              </div>
              <div>
                <label className="block text-gray-500 text-sm mb-1">CGPA</label>
                <input 
                  disabled={!isEditing} 
                  name="cgpa"
                  value={profile.cgpa} 
                  onChange={handleChange}
                  className={`w-full p-2 rounded border ${isEditing ? 'border-gray-300' : 'border-transparent bg-transparent'}`} 
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-500 text-sm mb-1">Skills</label>
              <textarea 
                disabled={!isEditing} 
                name="skills"
                value={profile.skills} 
                onChange={handleChange}
                className={`w-full p-2 rounded border ${isEditing ? 'border-gray-300' : 'border-transparent bg-transparent'}`} 
                rows="3"
              />
            </div>

            <div className="border-t pt-4">
              <label className="block text-gray-500 text-sm mb-2">Resume</label>
              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg flex-1 text-gray-600 text-sm">
                  📄 {profile.resumeLink}
                </div>
                {isEditing && (
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-900">
                    Upload New
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;