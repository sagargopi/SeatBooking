import React from 'react';
import { Square } from 'lucide-react';

interface SeatProps {
  id: number;
  isBooked: boolean;
  isSelected?: boolean;
}

export const Seat: React.FC<SeatProps> = ({ id, isBooked, isSelected }) => {
  const getColor = () => {
    if (isBooked) return "text-red-500";
    if (isSelected) return "text-blue-500";
    return "text-green-500";
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      <Square className={`w-8 h-8 ${getColor()}`} />
      <span className="absolute text-xs font-semibold">
        {id}
      </span>
    </div>
  );
};