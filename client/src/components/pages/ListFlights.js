import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import * as actions from '../actions';
import ListCardFlight from '../utils/ListCardFlight';
import FlightCart from '../utils/FlightCart';
import Loading from '../utils/Loading';

const ListFlights = (props) => {
  useEffect(() => {
    props.getListFlights(props.location.state);
  }, [props, props.getListFlights]);
  const listFlights = useSelector((state) => state.plane.listFlights);

  const [wayFlight, setWayFlight] = useState({});
  const [returnFlight, setReturnFlight] = useState({});
  const [costWay, setCostAway] = useState(0);
  const [costReturn, setCostReturn] = useState(0);

  // console.log(listFlights);
  // console.log(props.location.state);

  const selectedFlight = (flight) => {
    if (props.location.state.from === flight.from) {
      setWayFlight(flight);
      setCostAway(flight.price);
    } else {
      setReturnFlight(flight);
      setCostReturn(flight.price);
    }
  };

  if (!listFlights) {
    return <Loading />;
  } else if (listFlights.length === 0) {
    return <div>no flight</div>;
  }

  const displayFlightAway = listFlights
    .filter((flight) => flight.from === props.location.state.from)
    .map((flight) => (
      <ListCardFlight
        key={flight._id}
        flight={flight}
        selectedFlight={selectedFlight}
      />
    ));

  const displayFlightReturn = listFlights
    .filter((flight) => flight.from === props.location.state.to)
    .map((flight) => (
      <ListCardFlight
        key={flight._id}
        flight={flight}
        selectedFlight={selectedFlight}
      />
    ));

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">
          {props.location.state.from} <i className="fas fa-map-signs"></i>{' '}
          {props.location.state.to}
        </h1>
        <div className="col-md-7">
          {displayFlightAway.length !== 0 ? (
            <div>
              <h2>List Flights Away</h2>
              {displayFlightAway}
            </div>
          ) : (
            <div>no more flight from this date</div>
          )}
          {displayFlightReturn.length !== 0 ? <h2>List Flights Return</h2> : ''}
          {displayFlightReturn.length === 0 &&
          props.location.state.returnDate ? (
            <div>
              no more return flight for {props.location.state.returnDate}
            </div>
          ) : (
            <div>{displayFlightReturn}</div>
          )}
        </div>
        <div className="col-md-4">
          <FlightCart
            wayFlight={wayFlight}
            search={props.location.state}
            returnFlight={returnFlight}
            costWay={costWay}
            costReturn={costReturn}
          />
        </div>
      </div>
    </div>
  );
};

export default connect(null, actions)(ListFlights);
