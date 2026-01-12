import React, { useState, useEffect } from 'react';
import Navbar from '../Shared/Navbar';
import JobCard from './JobCard';
import API from '../../utils/api';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const { data } = await API.get('/jobs');
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleApply = async (jobId) => {
    try {
      await API.post('/applications/apply', { jobId });
      alert("Application Submitted Successfully!");
    } catch (error) {
      alert(error.response?.data?.message || "Error applying");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            // Notice we use job._id because that's how MongoDB sends ID
            <JobCard key={job._id} job={{...job, id: job._id}} onApply={handleApply} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobList;