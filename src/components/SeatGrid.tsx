import React from 'react';
import { Seat } from './Seat';
import { Seat as SeatType } from '../types/seat';

interface SeatGridProps {
  seats: SeatType[];
}

export const SeatGrid: React.FC<SeatGridProps> = ({ seats }) => {
  return (
    <div className="border rounded-lg p-4">
      <div className="grid grid-cols-7 gap-2 mb-4">
        {seats.slice(0, 77).map((seat) => (
          <Seat
            key={seat.id}
            id={seat.id}
            isBooked={seat.isBooked}
          />
        ))}
      </div>
      <div className="flex justify-center gap-2">
        {seats.slice(77).map((seat) => (
          <Seat
            key={seat.id}
            id={seat.id}
            isBooked={seat.isBooked}
          />
        ))}
      </div>
    </div>
  );
};