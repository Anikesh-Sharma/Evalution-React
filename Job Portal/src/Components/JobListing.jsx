import React, { useState } from 'react';
import JobCard from './JobCard';

const JobListing = ({ jobs }) => {
  const [roleFilter, setRoleFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleRoleChange = (e) => setRoleFilter(e.target.value);
  const handleLevelChange = (e) => setLevelFilter(e.target.value);
  const handleSearch = (e) => setSearchTerm(e.target.value.toLowerCase());

  const filteredJobs = jobs
    .filter((job) => (roleFilter ? job.role === roleFilter : true))
    .filter((job) => (levelFilter ? job.level === levelFilter : true))
    .filter((job) => job.language.toLowerCase().includes(searchTerm));

  return (
    <div className="job-listing">
      <input type="text" placeholder="Search by language" onChange={handleSearch} />
      <select onChange={handleRoleChange}>
        <option value="">All Roles</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="FullStack">FullStack</option>
      </select>
      <select onChange={handleLevelChange}>
        <option value="">All Levels</option>
        <option value="Junior">Junior</option>
        <option value="Senior">Senior</option>
      </select>
      <div>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => <JobCard key={index} job={job} />)
        ) : (
          <p>No jobs available</p>
        )}
      </div>
    </div>
  );
};

export default JobListing;