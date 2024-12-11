import React, { useState } from 'react';
import { Seat as SeatType } from './types/seat';
import { initializeSeats, bookSeats } from './utils/seatUtils';
import { BookingForm } from './components/BookingForm';
import { StatusMessage } from './components/StatusMessage';
import { SeatGrid } from './components/SeatGrid';
import { Legend } from './components/Legend';

function App() {
  const [seats, setSeats] = useState<SeatType[]>(initializeSeats());
  const [numberOfSeats, setNumberOfSeats] = useState<string>('');
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleBooking = () => {
    const num = parseInt(numberOfSeats);
    if (isNaN(num) || num < 1) {
      setMessage({ text: 'Please enter a valid number of seats', type: 'error' });
      return;
    }

    const result = bookSeats(seats, num);
    setMessage({
      text: result.message,
      type: result.success ? 'success' : 'error'
    });
    setSeats([...seats]); // Trigger re-render
    if (result.success) {
      setNumberOfSeats('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Train Seat Reservation</h1>
          
          <BookingForm
            numberOfSeats={numberOfSeats}
            onNumberOfSeatsChange={setNumberOfSeats}
            onBookSeats={handleBooking}
          />

          <StatusMessage message={message} />
          <SeatGrid seats={seats} />
          <Legend />
        </div>
      </div>
    </div>
  );
}

export default App;