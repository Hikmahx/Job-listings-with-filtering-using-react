import React from 'react';
import FilterBtn from './FilterBtn';

const Filter = ({ selectedBtn, removeBtn, clearAllBtns }) => {
  return (
    <div className='filter-container'  style ={selectedBtn.length > 0? {display:'block'} :{display:'none'}} >
      <div className='selected-btn'>
          <FilterBtn btns={selectedBtn} removeBtn= {removeBtn}  />
      </div>
      <p className='clear' onClick = {clearAllBtns}>Clear</p>
    </div>
  )
}

export default Filter;
