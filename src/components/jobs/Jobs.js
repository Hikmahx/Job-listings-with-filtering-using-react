import React, { Fragment} from 'react';
import JobItem from './JobItem';

const Jobs = ({jobs, click, selectedBtn}) => {

  const itemList = item => {
    return <button onClick={click} data-tools={item}>{item}</button>;
  };
  

  const displayCard = (job) =>{
    let jobId = ''

    if(selectedBtn.length > 0 ){
      let jobBtnArray = Array.from([job.role, job.level, ...job.tools, ...job.languages])

      selectedBtn.every(btn=> jobBtnArray.includes(btn))? jobId = {display: 'block'} : jobId =  {display: 'none'}
      console.log(job.id)
      return jobId
    }else{
      jobId = {display: 'block'}
      console.log(job.id)
      return jobId
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
