const Flight = require('../controllers/flight');

module.exports = (app) => {
  // Create Flight
  app.post('/api/flight/new', Flight.createFlight);

  // Fetch All Flights
  app.get('/api/flights', Flight.fetchAllFlights);

  // get list Flights
  app.post('/api/list/flights', Flight.getListFlights);
};
