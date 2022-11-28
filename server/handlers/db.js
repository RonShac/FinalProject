"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;
console.log(MONGO_URI);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbFunction = async (callback) => {
  // creates a new client
  const client = new MongoClient(MONGO_URI, options);

  // connect to the client
  await client.connect();

  // connect to the database (db name is provided as an argument to the function)
  const db = client.db();
  console.log("connected!");

  // run database code
  const result = await callback(db);

  // close the connection to the database server
  client.close();
  console.log("disconnected!");

  return result;
};

module.export = dbFunction;