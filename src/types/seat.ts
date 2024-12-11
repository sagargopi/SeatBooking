export interface Seat {
  id: number;
  isBooked: boolean;
  rowNumber: number;
}

export interface BookingResult {
  success: boolean;
  message: string;
  bookedSeats: number[];
}