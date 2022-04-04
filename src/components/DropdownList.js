import React, { useState } from 'react'

function DropdownList({ list }) {
  const [selectedItem, setSelectedItem] = useState('');

  const onSelect = (e) => {
    e.preventDefault();
    const item = e.target.getAttribute('name');
    setSelectedItem(item);
  };

  return (
    <ul className="dropdown">
        {list.map((listItem, index) => (
            <li key={listItem + index}>
              <button 
                name={listItem}
                className={
                  selectedItem === listItem
                  ? "selected dropdown-item"
                  : "dropdown-item"
                }
                onClick={onSelect}>{listItem}</button>
            </li>
        ))}
    </ul>
  )
}

export default DropdownList
