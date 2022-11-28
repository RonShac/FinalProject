const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const {tickets, events, artists} = require("./data.js");

const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db();
    console.log("connected!");

    //console.log("clearing tickets...");
    //await db.collection("tickets").deleteMany({ });
    console.log("clearing events...");
    await db.collection("events").deleteMany({ });
    console.log("clearing artists...");
    await db.collection("artists").deleteMany({ });

    console.log("import artists...");
    await db.collection("artists").insertMany(artists);
    console.log("import events...");
    await db.collection("events").insertMany(events);

    console.log("success");
  } catch (err) {
    console.error(err.stack);
  }
  
  client.close();
  console.log("disconnected!");
};

batchImport();
