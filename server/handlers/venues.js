"use strict";

const dbFunction = require("./db");

const getVenues = async (req, res) => {
  const venues = await dbFunction(async (db) => {
    return await db.collection("venues").find().toArray();
  });

  //console.log(venues);

  res.status(200).json({
    status: 200,
    data: venues,
  });
};

const getVenue = async (req, res) => {
  const _id = req.params.venue;

  const venue = await dbFunction(async (db) => {
    return await db.collection("venues").findOne({ _id });
  });

  //console.log(venue);

  if (venue !== null) {
    return res.status(200).json({
      status: 200,
      _id,
      data: venue,
    });
  }

  res.status(404).json({
    status: 404,
    _id,
    data: "Not Found",
  });
};

module.exports = {
  getVenues,
  getVenue,
};
