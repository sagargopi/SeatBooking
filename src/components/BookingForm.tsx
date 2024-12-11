import React from 'react';

interface BookingFormProps {
  numberOfSeats: string;
  onNumberOfSeatsChange: (value: string) => void;
  onBookSeats: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  numberOfSeats,
  onNumberOfSeatsChange,
  onBookSeats,
}) => {
  return (
    <div className="mb-6">
      <div className="flex gap-4 items-end">
        <div className="flex-1">
          <label htmlFor="seats" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Seats (max 7)
          </label>
          <input
            type="number"
            id="seats"
            min="1"
            max="7"
            value={numberOfSeats}
            onChange={(e) => onNumberOfSeatsChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={onBookSeats}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Book Seats
        </button>
      </div>
    </div>
  );
};