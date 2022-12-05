"use strict";

const dbFunction = require("./db");

const getEvents = async (req, res) => {
  const perPage = Number(req.query.perPage ?? 2);
  const page = Number(req.query.page ?? 1);
  let search = {};

  if (req.query.hasOwnProperty("search")) {
    search = {...search, $text: { $search: req.query.search, $caseSensitive: false } };
  }

  if (req.query.hasOwnProperty("artist")) {
    search = {...search, "lineup.artistId": req.query.artist };
  }

  let events = await dbFunction(async (db) => {
    return await db.collection("events").find(search).toArray();
  });

  let pagination = {};
  if (req.query.hasOwnProperty("page")) {
    const start = (page - 1) * perPage;
    const end = (page) * perPage;
    const totalPages = Math.ceil(events.length / perPage);
    const nextPage = Math.min(Math.max(page + 1, 1), totalPages);
    const prevPage = Math.min(Math.max(page - 1, 1), totalPages);
    let next = `/api/events?page=${nextPage}`
    let prev = `/api/artists?page=${prevPage}`;
    if (req.query.hasOwnProperty("search")) {
      next = next + `&search=${req.query.search}`;
      prev = prev + `&search=${req.query.search}`;
    }
    pagination = { 
      total: events.length, 
      page, 
      perPage, 
      totalPages,
      next,
      prev,
    }
    events = events.slice(start, end);
  }

  console.log(events);

  res.status(200).json({
    status: 200,
    data: events,
    ...pagination
  });
};

const getEvent = async (req, res) => {
  const id = Number(req.params.event);

  const event = await dbFunction(async (db) => {
    return await db.collection("events").findOne({ id });
  });

  console.log(event);

  if (event !== null) {
    return res.status(200).json({
      status: 200,
      id,
      data: event,
    });
  }

  res.status(404).json({
    status: 404,
    id,
    data: "Not Found",
  });
};


module.exports = {
  getEvents,
  getEvent,
};
