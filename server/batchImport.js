const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const {users, artists, events, tickets} = require("./data.js");

const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);
  console.log(MONGO_URI);
  try {
    await client.connect();
    const db = client.db();
    console.log("connected!");

    console.log("clearing tickets...");
    await db.collection("tickets").deleteMany({ });
    console.log("clearing events...");
    await db.collection("events").deleteMany({ });
    await db.collection("events").dropIndexes({ });
    console.log("clearing artists...");
    await db.collection("artists").deleteMany({ });
    await db.collection("artists").dropIndexes({ });
    console.log("clearing users...");
    await db.collection("users").deleteMany({ });

    console.log(`import ${users.length} users...`);
    await db.collection("users").insertMany(users);
    console.log(`import ${artists.length} artists...`);
    await db.collection("artists").insertMany(artists);
    console.log(`import ${events.length} events...`);
    await db.collection("events").insertMany(events);
    console.log(`import ${tickets.length} tickets...`);
    await db.collection("tickets").insertMany(tickets);

    console.log("adding text search indices...")
    await db.collection("artists").createIndex({ "$**" : "text" });
    await db.collection("events").createIndex({ "$**" : "text" });

    console.log("success");
  } catch (err) {
    console.error(err.stack);
  }
  
  client.close();
  console.log("disconnected!");
};

batchImport();
