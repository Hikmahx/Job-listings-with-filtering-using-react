import React, { Fragment} from 'react';
import JobItem from './JobItem';

const Jobs = ({jobs, click, selectedBtn}) => {

  const itemList = item => {
    return <button onClick={click} data-tools={item}>{item}</button>;
  };
  

  const displayCard = (job) =>{
    let jobDisplay = ''

    if(selectedBtn.length > 0 ){
      let jobBtnArray = Array.from([job.role, job.level, ...job.tools, ...job.languages])

      selectedBtn.every(btn=> jobBtnArray.includes(btn))? jobDisplay = {display: 'block'} : jobDisplay =  {display: 'none'}
      return jobDisplay
    }else{
      jobDisplay = {display: 'block'}
      return jobDisplay
    } 
}

  return (
    <Fragment>
    <ul className='jobs'>
      {jobs.map(job => (
        <JobItem
          displayCard = {displayCard(job)}
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
          click= {click}
        />
      ))}
    </ul>
    </Fragment>
  );
};

export default Jobs;
