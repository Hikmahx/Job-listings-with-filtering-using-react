import React from 'react';
import JobItem from './JobItem';

const Jobs = props => {
  const jobs = [
    // { id: 1, name: 'kljd' },
    // { id: 2, name: 'dfljl' },
    // { id: 3, name: 'fsajkl;' },
    // { id: 4, name: 'jfdsl;jfl;afkjd' },
    {
      id: 5,
      company: 'Photosnap',
      logo: './images/photosnap.svg',
      new: true,
      featured: true,
      position: 'Senior Frontend Developer',
      role: 'Frontend',
      level: 'Senior',
      postedAt: '1d ago',
      contract: 'Full Time',
      location: 'USA Only',
      languages: ['HTML', 'CSS', 'JavaScript'],
      tools: [],
    },
  ];

  const itemList = item => {
    return <button data-tools={item}>{item}</button>;
  };
  

  return (
    <main>
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
    </main>
  );
};

export default Jobs;
