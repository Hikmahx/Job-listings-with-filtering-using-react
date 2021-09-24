import React from 'react';

const JobItem = props => {

  return (
    <li style = {props.displayCard} className={props.featured  ===true? 'job cyan-border': 'job'}>
        <img src={props.logo} alt="banner"/>
        <div className='company'>
          <h2>{props.company}</h2>
          <span className={props.new === true ? 'cyan' : ''}>
            {props.new === true ? 'New!' : ''}
          </span>
          <span className={props.featured === true ? 'black' : ''}>
            {props.featured === true ? 'Featured' : ''}
          </span>
        </div>
        <h3>{props.position}</h3>
        <div className='details'>
          <span>{props.postedAt}</span>
          <span>{props.contract}</span>
          <span>{props.location}</span>
        </div>
        <div className='filter'>
          <button data-role={props.role} onClick= {props.click} >{props.role}</button>
          <button data-level={props.level} onClick= {props.click} >{props.level}</button>
           {props.languages}
          {props.tools} 
        </div>
    </li>
  );
};

export default JobItem;
