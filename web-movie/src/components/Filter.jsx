import React from 'react';

const Filter = () => {
  // Daftar filter dan sort
  const filters = ['Year', 'Genre', 'Status', 'Availability', 'Award'];
  const sortOptions = ['Alphabetic'];

  return (
    <div className="p-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
      <div className="flex flex-wrap items-center space-x-2">
        <label className="whitespace-nowrap">Filtered by:</label>
        {filters.map((filter, index) => (
          <select key={index} className="p-2 bg-gray-700 text-white rounded-lg">
            <option>{filter}</option>
          </select>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <label className="whitespace-nowrap">Sorted by:</label>
        {sortOptions.map((option, index) => (
          <select key={index} className="p-2 bg-gray-700 text-white rounded-lg">
            <option>{option}</option>
          </select>
        ))}
      </div>
    </div>
  );
};

export default Filter;
