import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import FlightCard from './FlightCard';
import { useHistory } from 'react-router-dom';

const flights = [
  {
    _id: '5fdd20dcbbcbc80ddddde274',
    from: 'Miami',
    price: 250,
    to: 'Las Vegas',
    depart: '2021-11-18T00:00:00.000+00:00',
    depTime: '2021-11-18T20:00:00.020+00:00',
    arrTime: '2021-11-18T21:00:00.198+00:00',
    type: 'Economy',
    photo:
      'https://res.cloudinary.com/dwtc6zep7/image/upload/v1608309969/wiki-airline/la.jpg',
    company:
      'https://res.cloudinary.com/dwtc6zep7/image/upload/v1608744397/wiki-airline/FRONTIER_AIRLINES.png',
  },
  {
    _id: '5ff5ce7f652b786a39175310',
    from: 'Miami',
    price: 138,
    to: 'Boston',
    depart: '2021-11-21T00:00:00.000+00:00',
    depTime: '2021-11-21T14:00:00.000+00:00',
    arrTime: '2021-11-21T16:00:00.000+00:00',
    type: 'Economy',
    photo:
      'https://res.cloudinary.com/dwtc6zep7/image/upload/v1609944555/wiki-airline/boston.jpg',
    company:
      'https://res.cloudinary.com/dwtc6zep7/image/upload/v1608743764/wiki-airline/airlines.png',
  },
  {
    _id: '5ff5d0b71d2c2b6a857e3e7a',
    from: 'Boston',
    price: 89,
    to: 'New York',
    depart: '2021-11-22T00:00:00.000+00:00',
    depTime: '2021-11-22T15:00:00.000+00:00',
    arrTime: '2021-11-22T16:00:00.000+00:00',
    type: 'Economy',
    photo:
      'https://res.cloudinary.com/dwtc6zep7/image/upload/v1609945219/wiki-airline/new_york.jpg',
    company:
      'https://res.cloudinary.com/dwtc6zep7/image/upload/v1608743764/wiki-airline/airlines.png',
  },

  {
    _id: '5ff5d38d0699b96c13af381c',
    from: 'New York',
    price: 180,
    to: 'San Francisco',
    depart: '2021-11-16T00:00:00.000+00:00',
    depTime: '2021-11-16T14:00:00.000+00:00',
    arrTime: '2021-11-16T20:00:00.000+00:00',
    type: 'Economy',
    photo:
      'https://res.cloudinary.com/dwtc6zep7/image/upload/v1609945884/wiki-airline/san-francisco.jpg',
    company:
      'https://res.cloudinary.com/dwtc6zep7/image/upload/v1608743764/wiki-airline/airlines.png',
  },
];

const SampleFlights = (props) => {
  let history = useHistory();
  const onSubmit = (value) => {
    value.persons = 1;
    history.push({
      pathname: `/list/flights`,
      state: value,
    });
  };

  const displayFlights = flights.map((flight) => {
    return (
      <div key={flight._id} className="col-md-3">
        <FlightCard
          key={flight._id}
          flight={flight}
          onSubmit={onSubmit}
          user={props.user}
        />
      </div>
    );
  });

  return (
    <div>
      <div className="container">
        <h2 className="my-4 ">Our selection</h2>
        <hr className="hr-trending"></hr>
        <div className="row">{displayFlights}</div>
      </div>
    </div>
  );
};

export default connect(null, actions)(SampleFlights);
