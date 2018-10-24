// Dependencies
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// Setup Express
let app = express();
let PORT = process.env.port || 3000;
// Express data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Reservation and waiting list arrays
let reservations =[];
// Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
app.get("/tables", function(req, res) {
res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
  });
app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});
app.get("/api/waitList", function(req, res) {
    return res.json(waitingList);
});
// app.post("/api/reservations", function(req, res) {
    
//     let newReservation = req.body
//     // if (reservations.length < 5) {
//     //     reservations.push(newReservation);
//     // } else {
//     //     waitingList.push(newReservation);
//     // };
//     // console.log(reservations);
//     // console.log(waitingList);
// });
// Starts server listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });