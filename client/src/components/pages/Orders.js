import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import * as actions from '../actions';
import ListCardFlight from '../utils/ListCardFlight';
import Loading from '../utils/Loading';
const Orders = (props) => {
  const orders = useSelector((state) => state.order.orders);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      props.fetchOrdersByUserId(user._id);
    }
  }, [props, props.fetchOrdersByUserId, user]);

  console.log(orders);

  if (!orders) {
    return <Loading />;
  } else if (orders.length === 0) {
    return <div>No Orders</div>;
  }

  const selectedFlight = (flight) => {
    console.log(flight._id);
  };

  const flights = orders.flatMap(({ flight }) => flight);
  console.log(flights);

  const display = flights.map((flight, i) => {
    return (
      <ListCardFlight key={i} flight={flight} selectedFlight={selectedFlight} />
    );
  });

  return (
    <div className="container-fluid">
      <h4 className="my-4 ">List all Orders</h4>
      <div className="row">
        <div className="col-md-8">{display}</div>
      </div>
    </div>
  );
};

export default connect(null, actions)(Orders);
