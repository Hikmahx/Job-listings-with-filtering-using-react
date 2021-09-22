import React from 'react';
import FilterBtn from './FilterBtn';

const Filter = ({ selectedBtn }) => {
  return (
    <div className='filter-container'  style ={selectedBtn.length > 0? {display:'block'} :{display:'none'}} >
      <div className='selected-btn'>
          <FilterBtn btns={selectedBtn} />
      </div>
      <p className='clear'>Clear</p>
    </div>
  )
}

export default Filter;
