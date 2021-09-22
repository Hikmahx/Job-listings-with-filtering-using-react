import React, { Fragment } from 'react';
import removeIcon from '../../assets/icon-remove.svg';

const FilterBtn = ({btns})=> {
  return (
    <Fragment>
      {btns.map(btn=>(
        <button>
          {btn}
          <span><img src={removeIcon} alt=""/></span>
        </button>
      ))}
    </Fragment>
  )
}

export default FilterBtn;
