import React from "react";
import { top5 } from '../../activities';

const top5Stringified = top5.map((attribute) => (
  typeof attribute === 'string' ? attribute : `${attribute} mins`
))

const PromptSearchBar = () => {
  return (
    <div className="flex items-center space-x-4 p-4 rounded-lg bg-neon-blue-300 shadow-md">
      <p className="text-lg font-semibold text-salmon-pink">Let's Play with:</p>
      <div className="flex items-center w-full max-w-md bg-white border border-gray-300 rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Type or choose from the following..."
          className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        {top5Stringified.map((attribute) => (
          <button
          key={attribute}
          className="px-4 py-2 mr-2 rounded-lg secondary-btn"
          >{attribute}</button>
        ))}
      </div>
    </div>
  );
};

export default PromptSearchBar;
