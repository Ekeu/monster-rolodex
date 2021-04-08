import React from 'react';

const SearchBox = ({ handleChange, placeholder }) => {
  return (
    <>
      <label for='search' class='sr-only'>
        Search
      </label>
      <input
        type='search'
        name={placeholder}
        id='search'
        class='shadow-sm focus:ring-red-800 focus:border-red-800 block w-full sm:text-sm border-gray-300 rounded-md'
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBox;
