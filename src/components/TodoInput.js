import React from 'react';

function TodoInput() {
  return (
    <div className="bg-white">
      <input
        type="text"
        placeholder="What needs to be done?"
        className="outline-none text-lg p-2"
      />
    </div>
  );
}

export default TodoInput;
