import React from 'react';

const JobCard = ({ job, onApply }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
          <p className="text-gray-500 font-medium">{job.company}</p>
        </div>
        <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full font-semibold">
          {job.type}
        </span>
      </div>

      <div className="mt-4 flex items-center space-x-4 text-sm text-gray-600">
        <span>📍 {job.location}</span>
        <span>💰 {job.stipend}</span>
      </div>

      <div className="mt-4 pt-4 border-t flex justify-between items-center">
        <span className="text-xs text-gray-400">Posted: {job.postedDate}</span>
        <button 
          onClick={() => onApply(job.id)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;