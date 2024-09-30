import React from 'react';

const DropdownFilter = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex space-x-4">
        {['Year', 'Genre', 'Status', 'Availability', 'Award'].map((filter, idx) => (
          <select key={idx} className="border rounded-lg p-2 bg-gray-700">
            <option>{filter}</option>
          </select>
        ))}
      </div>
      <button className="px-4 py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600">
        Submit
      </button>
      <select className="border rounded-lg p-2 bg-gray-700">
        <option>Alphabetics</option>
      </select>
    </div>
  );
};

export default DropdownFilter;
