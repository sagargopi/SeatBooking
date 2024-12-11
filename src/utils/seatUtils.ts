import { Seat, BookingResult } from '../types/seat';

// Initialize seats array with 80 seats
export const initializeSeats = (): Seat[] => {
  const seats: Seat[] = [];
  let currentRow = 1;
  let seatInRow = 0;

  for (let i = 1; i <= 80; i++) {
    seatInRow++;
    if (seatInRow > 7) {
      currentRow++;
      seatInRow = 1;
    }
    
    seats.push({
      id: i,
      isBooked: false,
      rowNumber: currentRow
    });
  }
  return seats;
};

export const findAvailableSeats = (
  seats: Seat[],
  numberOfSeats: number
): number[] => {
  // First try to find seats in the same row
  for (let row = 1; row <= Math.ceil(80 / 7); row++) {
    const rowSeats = seats.filter(seat => seat.rowNumber === row && !seat.isBooked);
    if (rowSeats.length >= numberOfSeats) {
      return rowSeats.slice(0, numberOfSeats).map(seat => seat.id);
    }
  }

  // If seats in same row not available, find nearest available seats
  const availableSeats: number[] = [];
  for (const seat of seats) {
    if (!seat.isBooked) {
      availableSeats.push(seat.id);
      if (availableSeats.length === numberOfSeats) {
        break;
      }
    }
  }

  return availableSeats.length === numberOfSeats ? availableSeats : [];
};

export const bookSeats = (
  seats: Seat[],
  numberOfSeats: number
): BookingResult => {
  if (numberOfSeats > 7) {
    return {
      success: false,
      message: "You can only book up to 7 seats at a time",
      bookedSeats: []
    };
  }

  const availableSeats = findAvailableSeats(seats, numberOfSeats);
  
  if (availableSeats.length === 0) {
    return {
      success: false,
      message: "Not enough seats available",
      bookedSeats: []
    };
  }

  // Book the seats
  availableSeats.forEach(seatId => {
    const seat = seats.find(s => s.id === seatId);
    if (seat) {
      seat.isBooked = true;
    }
  });

  return {
    success: true,
    message: `Successfully booked seats: ${availableSeats.join(", ")}`,
    bookedSeats: availableSeats
  };
};