"use strict";

const dbFunction = require("./db");


const getProfile = async (req, res) => {
  const events = await dbFunction(async (db) => {
    // 1. get all tickets for user

    // 2. get all events associated with those tickets

    // todo replace
    return await db.collection("events").find().toArray();
  });
  
  const user = {
    username: "ron",
    email: "ron@example.com",
    avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?s=200&d=identicon",
    events: events
  }

  res.status(200).json({
    status: 200,
    data: user
  });
};

module.exports = {
  getProfile,
};
