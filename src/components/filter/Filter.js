import React from 'react';
import FilterBtn from './FilterBtn';

function Filter() {
  return (
    <div className='filter-container'>
      <div className='selected-btn'>
        <FilterBtn/>
      </div>
      <p className='clear'>Clear</p>
    </div>
  );
}

export default Filter;
