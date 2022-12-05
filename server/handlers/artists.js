"use strict";

const dbFunction = require("./db");

const getArtists = async (req, res) => {
  const perPage = Number(req.query.perPage ?? 5);
  const page = Number(req.query.page ?? 1);
  let search = {};

  if (req.query.hasOwnProperty("search")) {
    search = { $text: { $search: req.query.search, $caseSensitive: false } };
  }

  let artists = await dbFunction(async (db) => {
    return await db.collection("artists").find(search).toArray();
  });

  let pagination = {};
  if (req.query.hasOwnProperty("page")) {
    const start = (page - 1) * perPage;
    const end = page * perPage;
    const totalPages = Math.ceil(artists.length / perPage);
    const nextPage = Math.min(Math.max(page + 1, 1), totalPages);
    const prevPage = Math.min(Math.max(page - 1, 1), totalPages);
    let next = `/api/artists?page=${nextPage}`;
    let prev = `/api/artists?page=${prevPage}`;
    if (req.query.hasOwnProperty("search")) {
      next = next + `&search=${req.query.search}`;
      prev = prev + `&search=${req.query.search}`;
    }
    pagination = {
      total: artists.length,
      page,
      perPage,
      totalPages,
      next,
      prev,
    };
    artists = artists.slice(start, end);
  }

  console.log(artists);

  res.status(200).json({
    status: 200,
    data: artists,
    ...pagination,
  });
};

const getArtist = async (req, res) => {
  const id = req.params.artist;

  const artist = await dbFunction(async (db) => {
    return await db.collection("artists").findOne({ id });
  });

  //console.log(artist);

  if (artist !== null) {
    return res.status(200).json({
      status: 200,
      id,
      data: artist,
    });
  }

  res.status(404).json({
    status: 404,
    id,
    data: "Not Found",
  });
};

module.exports = {
  getArtists,
  getArtist,
};
