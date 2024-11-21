import React from 'react';

function Filters() {
  return (
    <div className="bg-white flex justify-between items-start border border-gray-200 p-6 rounded-md">
      {/* Actions Section */}
      <div className="flex flex-col items-center space-y-2 mr-10">
        <p className="font-semibold">Actions</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">Mark All Completed</button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md text-sm">Clear Completed</button>
      </div>

      {/* Remaining Todos */}
      <div className="flex flex-col items-center text-center space-y-1 mr-10">
        <p className="text-sm font-semibold">Remaining Todos</p>
        <p className="text-xs text-gray-600">1 item left</p>
      </div>

      {/* Filter by Status Section */}
      <div className="flex flex-col items-center text-center space-y-2 mr-10">
        <p className="text-sm font-semibold">Filter by Status</p>
        <div className="flex flex-col space-y-2">
          <button className="hover:text-blue-500">All</button>
          <button className="hover:text-blue-500">Active</button>
          <button className="hover:text-blue-500">Completed</button>
        </div>
      </div>

      {/* Filter by Color Section */}
      <div className="flex flex-col items-center text-center space-y-2">
        <p className="text-sm font-semibold">Filter by Color</p>
        <div className="flex flex-col space-y-1">
          <label className="flex items-center text-green-600">
            <input type="checkbox" className="mr-1" /> Green
          </label>
          <label className="flex items-center text-blue-600">
            <input type="checkbox" className="mr-1" /> Blue
          </label>
          <label className="flex items-center text-orange-600">
            <input type="checkbox" className="mr-1" /> Orange
          </label>
          <label className="flex items-center text-purple-600">
            <input type="checkbox" className="mr-1" /> Purple
          </label>
          <label className="flex items-center text-red-600">
            <input type="checkbox" className="mr-1" /> Red
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filters;
