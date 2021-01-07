import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import * as actions from '../actions';
import ListCardFlight from '../utils/listFlight/ListCardFlight';
import FlightCart from '../utils/cart/FlightCart';
import Loading from '../utils/Loading';
import '../../css/listFlight.css';
import _ from 'lodash';
import FilterFlight from '../utils/listFlight/FilterFlight';

const ListFlights = (props) => {
  useEffect(() => {
    props.getListFlights(props.location.state);
  }, [props, props.getListFlights]);

  const listFlights = useSelector((state) => state.plane.listFlights);
  const user = useSelector((state) => state.auth.user);

  const [wayFlight, setWayFlight] = useState({});
  const [returnFlight, setReturnFlight] = useState({});
  const [costWay, setCostAway] = useState(0);
  const [costReturn, setCostReturn] = useState(0);
  const [isActive, setActive] = useState('');
  const [isActiveReturn, setisActiveReturn] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState('depTime');
  const [filterOrder, setFilterOrder] = useState('asc');

  const selectedFlight = (flight) => {
    if (props.location.state.from === flight.from) {
      setWayFlight(flight);
      setCostAway(flight.price);
      setActive(flight._id);
    } else {
      setReturnFlight(flight);
      setCostReturn(flight.price);
      setisActiveReturn(flight._id);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!listFlights) {
    return <Loading />;
  } else if (listFlights.length === 0) {
    return <div>no flight</div>;
  }

  const createOrder = (OrderValue) => {
    setIsLoading(true);
    props.createOrder(OrderValue, () => {
      setIsLoading(false);
      props.history.push(`/orders`);
    });
  };

  const displayFlightAway = _.orderBy(listFlights, [filter], [filterOrder])
    .filter((flight) => flight.from === props.location.state.from)
    .map((flight) => (
      <ListCardFlight
        key={flight._id}
        flight={flight}
        selectedFlight={selectedFlight}
        isActive={isActive}
      />
    ));

  const displayFlightReturn = _.orderBy(listFlights, [filter], [filterOrder])
    .filter((flight) => flight.from === props.location.state.to)
    .map((flight) => (
      <ListCardFlight
        key={flight._id}
        flight={flight}
        selectedFlight={selectedFlight}
        isActive={isActiveReturn}
      />
    ));

  const handleFilter = (value) => {
    setFilter(value.type);
    setFilterOrder(value.order);
  };

  return (
    <div>
      <div className="wrapper-list-title">
        <h1>
          {props.location.state.from} <i className="fas fa-map-signs"></i>{' '}
          {props.location.state.to} <FilterFlight handleFilter={handleFilter} />
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            {displayFlightAway.length !== 0 ? (
              <div>
                <h2 className="title-list">Flights way</h2>
                {displayFlightAway}
              </div>
            ) : (
              <div>
                {' '}
                no more flight for {props.location.state.depart}{' '}
                <button
                  className="btn btn-primary"
                  onClick={() => props.history.goBack()}
                >
                  back
                </button>{' '}
              </div>
            )}
            {displayFlightReturn.length !== 0 ? (
              <h2 className="title-list">Flights Return</h2>
            ) : (
              ''
            )}
            {displayFlightReturn.length === 0 &&
            props.location.state.returnDate ? (
              <div>
                no more return flight for {props.location.state.returnDate}
                <button
                  className="btn btn-primary"
                  onClick={() => props.history.goBack()}
                >
                  back
                </button>
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
              user={user}
              createOrder={createOrder}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, actions)(ListFlights);
