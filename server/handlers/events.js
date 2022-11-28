"use strict";

const dbFunction = require("./db");
const { events } = require("../data");

const getEvents = async (req, res) => {
    //const events = await dbFunction(async (db) => {
    //  return await db.collection("events").find().toArray();
    //});
  
    //console.log(events);
  
    res.status(200).json({
      status: 200,
      data: events,
    });
};

const getEvent = async (req, res) => {
  const _id = req.params.event;

  const event = await dbFunction(async (db) => {
    return await db.collection("events").findOne({ _id });
  });

  //console.log(event);

  if (event !== null) {
    return res.status(200).json({
      status: 200,
      _id,
      data: event,
    });
  }

  res.status(404).json({
    status: 404,
    _id,
    data: "Not Found",
  });
};


module.exports = {
  getEvents,
  getEvent,
};
