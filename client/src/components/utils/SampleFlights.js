import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import * as actions from '../actions';
import Loading from '../utils/Loading';
import FlightCard from './FlightCard';
// import moment from 'moment';
// const _ = require('lodash');

const SampleFlights = (props) => {
  const flights = useSelector((state) => state.plane.flights);

  useEffect(() => {
    props.getAllFlights();
  }, [props, props.getAllFlights]);

  if (!flights) {
    return <Loading />;
  }

  const displayFlights = flights
    //  _.orderBy(
    //   flights,
    //   (flight) => moment(flight.depart).format(''),
    //   'desc'
    // )
    .slice(Math.max(flights.length - 4, 0))
    .map((flight) => {
      return (
        <div key={flight._id} className="col-md-3">
          <FlightCard key={flight._id} flight={flight} />
        </div>
      );
    });

  return (
    <div>
      <div className="container">
        <div className="row">{displayFlights}</div>
      </div>
    </div>
  );
};

export default connect(null, actions)(SampleFlights);
