// ==========================================
// ASSIGNMENT 4: Create IRCTC Objects
// ==========================================

let passengerDetails = {
  fullName: "Venkata Sai Tharun Sankapalli",
  age: 24,
  gender: "Male",
  mobileNumber: "1234654810",
  email: "tharun.sankapalli@email.com",
  idType: "Aadhar Card",
  idNumber: "1234 5678 9012",
  berthChoice: "Lower",
  mealPreference: "Veg",
  isSeniorCitizen: false,
};

let trainDetails = {
  trainNumber: 12785,
  trainName: "Kacheguda Express",
  trainType: "Superfast Express",
  fromStationName: "Kacheguda",
  fromStationCode: "KCG",
  toStationName: "KSR Bengaluru City Junction",
  toStationCode: "SBC",
  departureTime: "19:05",
  arrivalTime: "06:25",
  runsOnDays: "Daily",
  distanceKm: 610,
  hasPantry: true,
};

let bookingDetails = {
  pnrNumber: "4326791054",
  transactionId: "TXN2026060399481",
  bookingDate: "03-06-2026",
  journeyDate: "15-08-2026",
  travelClass: "3AC",
  bookingQuota: "General",
  baseFare: 1200,
  irctcServiceCharge: 35.4,
  totalAmountPaid: 1235.4,
  bookingStatus: "CONFIRMED",
  coachNumber: "B1",
  seatNumber: 21,
  isTatkal: false,
};

// ==========================================
// ASSIGNMENT 5: Create IRCTC Arrays
// ==========================================

let popularStations = [
  "Secunderabad Junction (SC)",
  "KSR Bengaluru City Junction (SBC)",
  "New Delhi (NDLS)",
  "Mumbai Central (MMCT)",
  "Chennai Central (MAS)",
];

let trainsToBangalore = [
  {
    number: 12785,
    name: "Kacheguda Express",
    route: "KCG -> SBC",
  },
  {
    number: 12648,
    name: "Kongu Express",
    route: "KCG -> YPR",
  },
  {
    number: 12735,
    name: "Garibrath Express",
    route: "SC -> YPR",
  },
  {
    number: 22692,
    name: "Hazrat Nizamuddin - SBC Rajdhani",
    route: "SC -> SBC",
  },
];

let familyPassengers = [
  {
    name: "Venkata Sai Tharun",
    age: 24,
    gender: "Male",
    berthPreference: "Lower",
  },
  {
    name: "Sankapalli Rajeswari",
    age: 48,
    gender: "Female",
    berthPreference: "Lower",
  },
  {
    name: "Sankapalli Ramu",
    age: 52,
    gender: "Male",
    berthPreference: "Middle",
  },
];

let paymentMethods = [
  "IRCTC iPay (UPI)",
  "Net Banking",
  "Credit Card",
  "Debit Card",
  "IRCTC Wallet",
  "EMI Options",
];

let recentSearches = [
  { from: "HYB", to: "SBC", date: "15-08-2026" },
  { from: "SC", to: "NDLS", date: "20-08-2026" },
  { from: "KCG", to: "MAS", date: "02-09-2026" },
  { from: "HYB", to: "MMCT", date: "10-09-2026" },
  { from: "SBC", to: "SC", date: "18-09-2026" },
];

// ==========================================
// ASSIGNMENT 6: Complete IRCTC App
// ==========================================

let userProfile = {
  username: "sai_tharun_99",
  fullName: "Venkata Sai Tharun Sankapalli",
  email: "tharun.sankapalli@email.com",
  mobileNumber: "9876543210",
  walletBalance: 1850.5,
  isPremiumMember: true,
  savedStations: ["HYB", "BZA", "TPTY", "CSMT"],
};

let searchFromStation = "HYB";
let searchToStation = "BZA";
let searchJourneyDate = "25-08-2026";
let searchPassengerCount = 2;
let searchTravelClass = "3AC";
let isTatkalSearch = false;

let allAvailableTrains = [
  {
    number: 12760,
    name: "Charminar Express",
    fromStationCode: "SC",
    toStationCode: "BZA",
    departureTime: "18:25",
    arrivalTime: "23:55",
    sleeperFare: 275,
    ac3Fare: 710,
    availableSeats: 55,
  },
  {
    number: 12710,
    name: "Simhapuri Express",
    fromStationCode: "SC",
    toStationCode: "BZA",
    departureTime: "23:05",
    arrivalTime: "04:30",
    sleeperFare: 275,
    ac3Fare: 710,
    availableSeats: 32,
  },
  {
    number: 12764,
    name: "Padmavati Express",
    fromStationCode: "SC",
    toStationCode: "TPTY",
    departureTime: "18:40",
    arrivalTime: "06:55",
    sleeperFare: 435,
    ac3Fare: 1160,
    availableSeats: 18,
  },
  {
    number: 12734,
    name: "Narayanadri Express",
    fromStationCode: "SC",
    toStationCode: "TPTY",
    departureTime: "18:10",
    arrivalTime: "06:05",
    sleeperFare: 435,
    ac3Fare: 1160,
    availableSeats: 24,
  },
  {
    number: 17058,
    name: "Devagiri Express",
    fromStationCode: "SC",
    toStationCode: "CSMT",
    departureTime: "13:25",
    arrivalTime: "07:10",
    sleeperFare: 460,
    ac3Fare: 1250,
    availableSeats: 12,
  },
  {
    number: 22731,
    name: "Hyderabad Mumbai Express",
    fromStationCode: "HYB",
    toStationCode: "CSMT",
    departureTime: "22:35",
    arrivalTime: "13:05",
    sleeperFare: 430,
    ac3Fare: 1150,
    availableSeats: 40,
  },
];

let bookingPassengers = [
  {
    name: "Tharun",
    age: 24,
    gender: "Male",
    berthChoice: "Lower",
    coachNumber: "B1",
    seatNumber: 21,
  },
  {
    name: "raj",
    age: 48,
    gender: "Female",
    berthChoice: "Lower",
    coachNumber: "B1",
    seatNumber: 22,
  },
];

let selectedTrain = {
  number: 12760,
  name: "Charminar Express",
  departure: "18:25",
  arrival: "23:55",
  duration: "5 hours 30 min",
  chosenClass: "3AC",
  baseFarePerPassenger: 710,
};

let finalBooking = {
  pnrNumber: "4326791054",
  bookingDate: "03-06-2026",
  totalAmountPaid: 1455.4,
  isConfirmed: true,
  insuranceOpted: true,
  trainDetails: selectedTrain,
  passengers: bookingPassengers,
  paymentDetails: {
    paymentMethod: "UPI",
    transactionId: "TXN2026060399481",
    status: "SUCCESS",
    bankName: "HDFC Bank",
  },
};