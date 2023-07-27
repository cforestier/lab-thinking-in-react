import { useState } from 'react';

function SearchBar({ value, onSearch, onCheckboxChange }) {
  return (
    <div>
      Search
      <br />
      <input
        type="text"
        placeholder="Search.."
        value={value}
        onChange={onSearch}
      />
      <br />
      <input type="checkbox" id="checkbox" />
      <label>Only show products in stock</label>
    </div>
  );
}

export default SearchBar;
