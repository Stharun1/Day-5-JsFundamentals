var trainName = "Kacheguda Express";
var fare = 1250;
var isAvailable = true;

let availableSeats = 25;
availableSeats = 24; // OK — someone booked
availableSeats = 23; // OK — another booking
let currentFare = 1250;
let cartItemsCount = 3;
let walletBalance = 500;

let totalAmount = 0;
let bookingStatus = "PENDING";
let selectedSeat = null;
let userInput = "";

const TRAIN_NUMBER = 12785;
const TRAIN_NAME = "Kacheguda Express";
const FROM_STATION = "Hyderabad";
const TO_STATION = "Bangalore";
const JOURNEY_DATE = "25-01-2024";
const PNR_LENGTH = 10;
const GST_RATE = 18;
const MAX_PASSENGERS_PER_BOOKING = 6;

/*
PNR number: const (Once generated, it never changes).

Current page number: let (Changes as the user navigates).

Train name: const (The name of a specific train like "Kacheguda Express" remains fixed).

Available seats count: let (Decreases or increases with bookings).

GST percentage: const (Fixed at 18%).

User's typed username: let (Changes based on what input the user types).

Total fare calculation: let (Changes when seats or dynamically calculated charges are added).

From station: const (The starting point of the journey doesn't change for that ticket).

Login attempts counter: let (Increments on every failed attempt: 1, 2, 3...).

Maximum login attempts allowed: const (Always fixed at 3).
*/
