import React from 'react';

const Card = ({ name, sum }) => (
  <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg w-64 mr-2">
    <div className="flex-auto p-4">
      <div className="flex flex-wrap">
        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
          <h5 className="text-gray-500 uppercase font-bold text-xs">
            {name}
          </h5>
          <span className="font-semibold text-xl text-gray-800">
            {sum}
            €
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
