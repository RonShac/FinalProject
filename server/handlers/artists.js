"use strict";

const dbFunction = require("./db");
const { artists } = require("../data");

const getArtists = async (req, res) => {
  //const artists = await dbFunction(async (db) => {
  //  return await db.collection("artists").find().toArray();
  //});

  //console.log(artists);
  
  res.status(200).json({
    status: 200,
    data: artists,
  });
};

const getArtist = async (req, res) => {
  const _id = req.params.artist;

  const artist = await dbFunction(async (db) => {
    return await db.collection("artists").findOne({ _id });
  });

  //console.log(artist);

  if (artist !== null) {
    return res.status(200).json({
      status: 200,
      _id,
      data: artist,
    });
  }

  res.status(404).json({
    status: 404,
    _id,
    data: "Not Found",
  });
};


module.exports = {
  getArtists,
  getArtist,
};
