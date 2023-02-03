import React, { useState } from 'react';

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='flex items-center gap-4'>
    <button
      className={`relative inline-flex items-center h-9 w-20 p-0 bg-green-200 text-gray-700 rounded-full focus:outline-none focus:shadow-outline ${
        isActive
          ? 'bg-indigo-500 text-white'
          : 'bg-green-200'
      }`}
      onClick={() => setIsActive(!isActive)}
    >
      <span
        className={`absolute left-0 h-6 w-6 rounded-full bg-green-400 shadow transition-all transform ${
          isActive ? 'translate-x-12' : 'translate-x-1'
        }`}
      />
    </button>
    <span className='text-gray-600 text-lg'>Show Country</span>
    </div>

  );
};

export default ToggleButton;
