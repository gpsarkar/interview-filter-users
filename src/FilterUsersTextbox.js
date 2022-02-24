import React from 'react';

const FilterUsersTextbox = (props) => {
  return (
    <div>
      <input 
        className="filter-user" 
        type="text" 
        placeholder="Enter two characters to filter."
        onChange={(e) => props.onChange(e.target.value)} />
    </div>
  );
}

export default FilterUsersTextbox;