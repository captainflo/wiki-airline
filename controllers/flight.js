const Flight = require('../models/Flight');

// Create Flight
exports.createFlight = async function (req, res, next) {
  const { from, to, depart, depTime, arrTime, photo, type, price } = req.body;

  const flight = new Flight({
    from: from,
    price: price,
    to: to,
    depart: depart,
    depTime: depTime,
    arrTime: arrTime,
    type: type,
    photo:
      photo ||
      'https://res.cloudinary.com/dwtc6zep7/image/upload/v1608305423/wiki-airline/bookaflight.jpg',
    company:
      'https://res.cloudinary.com/dwtc6zep7/image/upload/v1608743764/wiki-airline/airlines.png',
  });

  await flight.save(function (error, flight) {
    if (error) {
      return next(error);
    }
    res.status(201).send(flight);
  });
};

// Fetch All Flights
exports.fetchAllFlights = async function (req, res, next) {
  const flights = await Flight.find({});

  if (!flights) {
    res.send('No flights founds...');
  }
  res.status(201).send(flights);
};

// Get List of Flight by search
exports.getListFlights = async function (req, res, next) {
  const { from, to, depart, returnDate } = req.body;
  const flights = await Flight.find({
    $or: [
      { from: from, to: to, depart: depart },
      { from: to, to: from, depart: returnDate },
    ],
  });

  if (!flights) {
    res.send('No flights founds...');
  }

  res.status(201).send(flights);
};

// // Fetch Ticket
// exports.fetchTicket = async function (req, res, next) {
//   const ticket = await Ticket.findById(req.params.id);
//   if (!ticket) {
//     res.send({ error: 'nothing found' });
//   }
//   if (!ticket) {
//     res.send('No ticket found...');
//   }
//   res.send(ticket);
// };

// // Update Ticket
// exports.updateTicket = async function (req, res, next) {
//   const ticket = await Ticket.findById(req.params.id);
//   if (!ticket) {
//     res.send({ error: 'nothing found' });
//   }

//   ticket.set(req.body);

//   await ticket.save();
//   res.status(200).send(ticket);
// };

// // Delete Ticket
// exports.deleteTicket = function (req, res, next) {
//   Ticket.findByIdAndRemove(req.params.id)
//     .then(function (user) {
//       res.json(user);
//     })
//     .catch(function (err) {
//       res.json(err);
//     });
// };
