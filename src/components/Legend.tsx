import React from 'react';

export const Legend: React.FC = () => {
  return (
    <div className="mt-6 flex gap-6 justify-center">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
        <span className="text-sm text-gray-600">Available</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
        <span className="text-sm text-gray-600">Booked</span>
      </div>
    </div>
  );
};