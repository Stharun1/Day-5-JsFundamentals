
// Your First Name (Tharun)
// T: 01010100  h: 01101000  a: 01100001  r: 01110010  u: 01110101  n: 01111110

// IRCTC
// I: 01001001  R: 01010010  C: 01000011  T: 01010100  C: 01000011


// 3. "Kacheguda"
// K: 01001011  a: 01100001  c: 01100011  h: 01101000  e: 01100101  g: 01100111  u: 01110101  d: 01100100  a: 01100001


// 4. "12785"
// 1: 00110001  2: 00110010  7: 00110111  8: 00111000  5: 00110101


// 5. "1250"
// 1: 00110001  2: 00110010  5: 00110101  0: 00110000

// ==========================================
// ASSIGNMENT 2: Trace the Flow 
// ==========================================

// 1. Key Press: You press the 'H' key on your laptop keyboard.
// 2. Binary: Keyboard converts it into bits/electrical signals: 01001000.
// 3. Computer & OS: Motherboard and Windows/Mac receive this signal and send it to Chrome.
// 4. Memory: JavaScript catches it and saves it in RAM (Stack Memory) as: let fromStation = "H";
// 5. Local Display: Chrome tells the graphics card to light up monitor pixels so you see "H" on screen.
// 6. Travel to Server: When you click search, data turns into light pulses (1s and 0s) and runs through fiber cables to the server.
// 7. Server Process: The server CPU (Intel Xeon) matches your binary data with train details in its database.
// 8. Output Display: Server sends back data, Chrome reads it, and pixels light up to show the train list.

// ==========================================
let trainNumber = 12785; // Number type
let trainName = "Kacheguda Express"; // String type
let fromStationCode = "HYB"; // String type
let toStationCode = "VJY"; // String type
let journeyDate = "25-08-2026"; // String type
let sleeperFare = 450; // Number type
let ac3Fare = 1200; // Number type
let numberOfPassengers = 2; // Number type
let isTatkalBooking = false; // Boolean type
let isConfirmed = true; // Boolean type
let pnrNumber = "4326791054"; // String type (kept as string so it won't lose leading zeros)

// took let for all variables because we might need to change their values later on and javascript is dynamically
// typed language,so we can assign any type of value to these variables in the future if needed.