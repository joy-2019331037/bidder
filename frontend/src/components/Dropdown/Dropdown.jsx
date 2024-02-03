import React, { useState } from 'react'
import list from './cats.json';

import './dropdown.css';

const Dropdown = () => {
    const [dropdown, setDropdown]=useState(false);

    const clickHandler=()=>{
      //  setDropdown((prev)=>!prev)
    }
  return (
    <>
    <div className='dropDown' onClick={clickHandler}>
        <label>Categories</label>
        <i class="ri-arrow-down-s-fill"></i>
    </div>
        {dropdown &&
        (
            <div className='dropDownModal'>
              {
                  list.map((item,i)=>(
                    <div>
                        <h3>{item.type}</h3>
                    </div>
                  ))
              }
            </div>
        )
        }
    </>
  )
}

export default Dropdown;