import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import * as actions from '../actions';
import ListCardFlight from '../utils/ListCardFlight';
import Loading from '../utils/Loading';

const ListFlights = (props) => {
  useEffect(() => {
    props.getListFlights(props.location.state);
  }, [props, props.getListFlights]);

  const listFlights = useSelector((state) => state.plane.listFlights);
  console.log(listFlights);
  console.log(props.location.state);

  if (!listFlights) {
    return <Loading />;
  } else if (listFlights.length === 0) {
    return <div>no flight</div>;
  }

  const displayFlightAway = listFlights
    .filter((flight) => flight.from === props.location.state.from)
    .map((flight) => <ListCardFlight flight={flight} />);

  const displayFlightReturn = listFlights
    .filter((flight) => flight.from === props.location.state.to)
    .map((flight) => <ListCardFlight flight={flight} />);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          {displayFlightAway.length !== 0 ? (
            <div>
              <p>list Flights Away</p>
              {displayFlightAway}
            </div>
          ) : (
            <div>no more flight from this date</div>
          )}
          {displayFlightReturn.length !== 0 ? <p>list Flights Return</p> : ''}
          {displayFlightReturn.length === 0 &&
          props.location.state.returnDate ? (
            <div>no more flight from this date</div>
          ) : (
            <div>{displayFlightReturn}</div>
          )}
        </div>
        <div className="col-md-4">
          <div>Total: $</div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, actions)(ListFlights);
