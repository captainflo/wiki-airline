import '../../../css/orderCard.css';
import ListOrder from './ListOrder';

const OrderCard = ({ order }) => {
  const display = order.flight.map((plane, i) => {
    return (
      <div key={i} className="col-md-6 list-order">
        <ListOrder flight={plane} />
      </div>
    );
  });
  return (
    <div className="card-order">
      <div className="card-order-title">
        <h3>Order: {order._id.slice(0, 8).toUpperCase()}</h3>
        <h3>
          Passenger <i className="fas fa-male"></i>: {order.persons}
        </h3>
      </div>
      <div className="row">{display}</div>
      <div className="total">
        <h3>
          Total: <span>${order.total}</span>
        </h3>
      </div>
    </div>
  );
};

export default OrderCard;
