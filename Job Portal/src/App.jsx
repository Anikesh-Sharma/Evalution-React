import React, { useState } from 'react';
import JobForm from './Components/JobForm';
import Joblisting from './Components/JobListing';
import './App.css'

const App = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = () => {
    const storedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    setJobs(storedJobs);
  };

  return (
    <div className='app-container'>
      <h1> Job Portal </h1>
      <JobForm fetchJobs = {fetchJobs} />
      <button className='fetch-btn' onClick={fetchJobs}>
        Fetch Listings
      </button>
      <Joblisting jobs = {jobs} />
    </div>
  );
};

export default App;
