import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-logo">
        <img src="https://via.placeholder.com/50" alt="Company Logo" />
      </div>
      <div className="job-details">
        <h3>{job.company}</h3>
        <p>{job.position} • {job.contract} • {job.location}</p>
        <p>Posted At: {job.postedAt}</p>
        <div className="job-tags">
          <span className="job-tag">{job.role}</span>
          <span className="job-tag">{job.level}</span>
          <span className="job-tag">{job.language}</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;