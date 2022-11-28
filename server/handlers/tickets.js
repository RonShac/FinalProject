"use strict";

const dbFunction = require("./db");

const getTicket = async (req, res) => {
  const _id = req.params.tivcket;

  const ticket = await dbFunction(async (db) => {
    return await db.collection("tickets").findOne({ _id });
  });

  //console.log(ticket);

  if (ticket !== null) {
    return res.status(200).json({
      status: 200,
      _id,
      data: ticket,
    });
  }

  res.status(404).json({
    status: 404,
    _id,
    data: "Not Found",
  });
};
  
const purchaseTicket = async (req, res) => {
  const { givenName, surname, email } = req.body;
  const event = req.params.event;
  // validate form data

  await dbFunction(async (db) => {
    const event = await db.collection("event").findOne({ id: event });

    // check event exists
    if (event === null) {
      return res.status(422).json({
        status: 422,
        data: req.body,
        message: "This event doesn't exist!",
      });
    }

    // check event exists
    if (event.tickets == 0) {
      return res.status(422).json({
        status: 422,
        data: req.body,
        message: "This event is sold out!",
      });
    }

    // update event lower tickets
    let query = { id: ticket.event };
    let newValues = { tickets: ticket.tickets - 1 };
    let result = await db.collection("events").updateOne(query, newValues);

    // finally insert all data
    const ticket = await db.collection("tickets").insertOne({
      number,
      givenName,
      surname,
      email,
    });

    // return data to client
    res.status(201).json({
      status: 201,
      data: { _id: ticket.insertedId, ...req.body },
      message: "You have booked the event",
    });
  });
};
  
  // STRETCH
const cancelTicket = async (req, res) => {
  const _id = req.params.ticket;

  await dbFunction(async (db) => {
    // find ticket to get event
    const ticket = await db.collection("tickets").findOne({ _id });
    if (ticket === null) {
      return res.status(404).json({ status: 404, message: "Not Found" });
    }

    // update event to free one more ticket
    let query = { id: ticket.event };
    let newValues = { tickets: ticket.tickets + 1 };
    let result = await db.collection("events").updateOne(query, newValues);

    result = await db.collection("tickets").deleteOne({ _id });

    res
      .status(202)
      .json({ status: 202, result: result, message: "Ticket was cancelled!" });
  });
};
  
// STRETCH
const changeTicket = async (req, res) => {
  const _id = req.params.ticket;

  // .......
};
  
module.exports = {
  getTicket,
  purchaseTicket,
  cancelTicket,
  changeTicket,
};