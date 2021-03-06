import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import * as actions from '../actions';
import OrderCard from '../utils/orders/OrderCard';
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

  const display = orders.map((order, i) => {
    return <OrderCard key={i} order={order} />;
  });

  return (
    <div>
      <div className="wrapper-list-title">
        <h1>Orders</h1>
      </div>
      <div className="container">
        <h4 className="my-4">My flights Tickets</h4>
        <hr className="hr-trending"></hr>
        <div className="row">
          <div className="col-md-8">{display}</div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, actions)(Orders);
