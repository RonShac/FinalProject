const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const { getProfile, getUsers, getTicketsForEmail } = require("./handlers/profile");
const { getEvents, getEvent } = require("./handlers/events");
const { purchaseTicket, getTickets, getTicket, cancelTicket, changeTicket } = require("./handlers/tickets");
const { getArtists, getArtist } = require("./handlers/artists");

const { getVenues, getVenue } = require("./handlers/venues");

const port = 8000;

express()
  .use(express.json())
  //.use(helmet())
  // CORS Policy workaround
  .use(function (req, res, next) {
    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/%27);
    res.setHeader("Access-Control-Allow-Origin", "*");
  
    // Request methods you wish to allow
    res.setHeader("Access-Control-Allow-Methods", "GET");
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
  
    // Pass to next layer of middleware
    next();
  })
  .use(morgan("tiny"))

  .get("/api/me", getProfile)
  .get("/api/users", getUsers)

  // artists
  .get("/api/artists", getArtists)
  .get("/api/artists/:artist", getArtist)

  // events
  .get("/api/events/", getEvents)
  .get("/api/events/:event", getEvent)

  // venues
  //.get("/api/venues/", getVenues)
  //.get("/api/venues/:venue", getVenue)

  // ticket endpoint
  .post("/api/events/:event/buy", purchaseTicket)
  .get("/api/tickets", getTickets)
  .get("/api/tickets/purchased", getTicketsForEmail)
  .get("/api/tickets/:ticket", getTicket)
  //.patch("/api/tickets/:ticket", changeTicket)
  .delete("/api/tickets/:ticket", cancelTicket)

  .get("/hello", (req, res) => {
    res.status(200).json({ status: 200, message: "Hello World!" });
  })

  .listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
