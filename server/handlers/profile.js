"use strict";

const dbFunction = require("./db");

// debug
const getUsers = async (req, res) => {
  const users = await dbFunction(async (db) => {
    return await db.collection("users").find().toArray();
  });

  console.log(users);
  
  res.status(200).json({
    status: 200,
    data: users,
  });
};

const getProfile = async (req, res) => {
  let user = await dbFunction(async (db) => await db.collection("users").findOne({ username: "ricardo" }))

  const events = await dbFunction(async (db) => {
    // 1. get all tickets for user
    const tickets = await db.collection("tickets").find({ email: user.email }).toArray();

    // 2. get all events associated with those tickets
    const events = await db.collection("events").find({ id: {"$in" : tickets.map(ticket => ticket.eventId)}}).toArray();

    return events;
  });
  
  user = {...user, events}

  res.status(200).json({
    status: 200,
    data: user
  });
};


const getTicketsForEmail = async (req, res) => {
  let email = req.query.email;

  const events = await dbFunction(async (db) => {
    // 1. get all tickets for user
    const tickets = await db.collection("tickets").find({ email }).toArray();
    
    console.log(tickets);

    // 2. get all events associated with those tickets
    const events = await db.collection("events").find({ id: {"$in" : tickets.map(ticket => ticket.eventId)}}).toArray();

    return events;
  });

  res.status(200).json({
    status: 200,
    data: events
  });
};

module.exports = {
  getTicketsForEmail,
  getProfile,
  getUsers,
};
