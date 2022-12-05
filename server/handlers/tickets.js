"use strict";

const dbFunction = require("./db");

// debug
const getTickets = async (req, res) => {
  const tickets = await dbFunction(async (db) => {
    return await db.collection("tickets").find().toArray();
  });

  console.log(tickets);

  res.status(200).json({
    status: 200,
    data: tickets,
  });
};

const getTicket = async (req, res) => {
  const _id = req.params.ticket;

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
  const { givenName, surname, email, type, quantity } = req.body;
  const eventId = Number(req.params.event);

  console.log(req.body);

  // validate form data
  if (!email || !type || !quantity) {
    return res.status(422).json({
      status: 422,
      data: req.body,
      message: "Missing important data for new ticket, try again!",
    });
  }

  await dbFunction(async (db) => {
    const event = await db.collection("events").findOne({ id: eventId });

    // check event exists
    if (event === null) {
      return res.status(422).json({
        status: 422,
        data: req.body,
        message: "This event is no longer available!",
      });
    }

    // check ticket type is available
    const ticketType = event.sales.find(({ id }) => id == type);
    //console.log(ticketType);

    if(!ticketType) {
      return res.status(422).json({
        status: 422,
        data: req.body,
        message: `${type} ticket type does not exist!`,
      });
    } else if (ticketType?.left < Number(quantity)) {
      return res.status(422).json({
        status: 422,
        data: req.body,
        message: `All ${ticketType.name ?? type} tickets have been soldout!`,
      });
    }

    // update event, deduct tickets from specific type
    let query = { id: eventId, "sales.id": type };
    let newValues = {
      $set: { "sales.$.left": Math.max(0, ticketType.left - quantity) },
    };
    //return res.status(418).json({status: 418, message: "Testing", body: req.body, event, ticketType, update: {query, newValues}});
    let result = await db.collection("events").updateOne(query, newValues);

    console.log(result);

    // finally insert all data
    const ticket = await db.collection("tickets").insertOne({
      eventId,
      type,
      quantity: Number(quantity),
      email,
      givenName,
      surname,
    });
    console.log(ticket);

    // return data to client
    res.status(201).json({
      status: 201,
      data: { _id: ticket.insertedId, ...req.body, debug: { result, ticket } },
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
  getTickets,
  getTicket,
  purchaseTicket,
  cancelTicket,
  changeTicket,
};
