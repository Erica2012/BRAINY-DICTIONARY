import React from 'react';

export default function Button({ children }) {
  return (
    <div>
      <button
        className="shadow-md align-text-bottom px-4 py-2 m-auto hover:scale-110 duration-200 
          cursor-pointer rounded-full space-y-7 justify-start text-white bg-purple-500 hover:bg-pink-300 hover:text-violet-500   "
      >
        {children}
      </button>
    </div>
  );
}
