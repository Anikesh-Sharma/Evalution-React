import React, { useState } from 'react';

const JobForm = ({ fetchJobs }) => {
  const [job, setJob] = useState({
    company: '',
    postedAt: '',
    city: '',
    location: '',
    role: 'Frontend',
    level: 'Junior',
    position: '',
    language: '',
    contract: 'Full-time',
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    localStorage.setItem('jobs', JSON.stringify([...storedJobs, job]));
    setJob({
      company: '',
      postedAt: '',
      city: '',
      location: '',
      role: 'Frontend',
      level: 'Junior',
      position: '',
      language: '',
      contract: 'Full-time',
    });
    fetchJobs();
    alert("Job Posted Successfully!");
  };

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <input type="text" name="company" placeholder="Company Name" value={job.company} onChange={handleChange} required />
      <input type="text" name="postedAt" placeholder="Posted At (YYYY-MM-DD)" value={job.postedAt} onChange={handleChange} required />
      <input type="text" name="city" placeholder="City" value={job.city} onChange={handleChange} required />
      <input type="text" name="location" placeholder="Location" value={job.location} onChange={handleChange} required />
      <select name="role" value={job.role} onChange={handleChange}>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="FullStack">FullStack</option>
      </select>
      <select name="level" value={job.level} onChange={handleChange}>
        <option value="Junior">Junior</option>
        <option value="Senior">Senior</option>
      </select>
      <input type="text" name="position" placeholder="Position" value={job.position} onChange={handleChange} required />
      <input type="text" name="language" placeholder="Programming Language" value={job.language} onChange={handleChange} required />
      <select name="contract" value={job.contract} onChange={handleChange}>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
      </select>
      <button type="submit">Post Job</button>
    </form>
  );
};

export default JobForm;