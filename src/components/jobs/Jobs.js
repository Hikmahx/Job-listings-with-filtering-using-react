import React, { Fragment, useState, useEffect } from 'react';
import JobItem from './JobItem';

const Jobs = props => {
  
  useEffect(() => {
    getData();
  }, []);
  
  const [jobs, setJobs] = useState([]);
  
  const getData = async () =>{
    const data = await fetch('./data.json');

    const jobs = await data.json();

    // let items = jobs
    // console.log(jobs);
    setJobs(jobs);
  }



  const itemList = item => {
    return <button data-tools={item}>{item}</button>;
  };
  

  return (
    <Fragment>
    <ul className='jobs'>
      {jobs.map(job => (
        <JobItem
          key={job.id}
          company={job.company}
          logo={job.logo}
          new={job.new}
          featured={job.featured}
          position={job.position}
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
          role={job.role}
          level={job.level}
          languages = {job.languages.map(itemList)}
          // languages={job.languages.map((item)=>{return<button data-tool={item}>{item}</button>})}
          tools={job.tools.map(itemList)}
        />
      ))}
    </ul>
    </Fragment>
  );
};

export default Jobs;
