import React, { useState } from 'react'
import DropdownList from './DropdownList';

function Dropdown() {
    const [state, setState] = useState('closed');
    const list = ['Profile Information', 'Change Password', 'Become Pro', 'Help', 'Log Out'];

    const handleOpenClick = () => {
        state === 'closed' ? setState('open') : setState('closed');
    }

  return (
    <div className={
        state === 'closed'
        ? "dropdown-wrapper"
        : "dropdown-wrapper open"
    }>
        <button className="btn" onClick={handleOpenClick}>Account setting
            <span className="material-icons">public</span>
        </button>
            <DropdownList 
                list={list}
            />
    </div>
  )
}

export default Dropdown;
