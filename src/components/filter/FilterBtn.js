import React, { Fragment } from 'react';
import removeIcon from '../../assets/icon-remove.svg';

const FilterBtn = ({btns, removeBtn})=> {
  return (
    <Fragment>
      {btns.map(btn=>(
        <button>
          {btn}
          <span ><img src={removeIcon} onClick = {removeBtn} alt=""/></span>
        </button>
      ))}
    </Fragment>
  )
}

export default FilterBtn;
