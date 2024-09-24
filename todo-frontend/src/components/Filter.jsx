import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div className="flex justify-center space-x-4 mb-4">
      <button
        onClick={() => setFilter('all')}
        className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        All
      </button>
      <button
        onClick={() => setFilter('completed')}
        className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Completed
      </button>
      <button
        onClick={() => setFilter('pending')}
        className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Pending
      </button>
    </div>
  );
};

export default Filter;
