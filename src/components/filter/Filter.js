import React from 'react';
import FilterBtn from './FilterBtn';

const Filter = ({ selectedBtn }) => {
  return (
    <div className='filter-container'>
      <div className='selected-btn'>
          <FilterBtn btns={selectedBtn} />
      </div>
      <p className='clear'>Clear</p>
    </div>
  )
}

export default Filter;
