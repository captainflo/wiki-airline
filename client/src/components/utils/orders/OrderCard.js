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
      <h2>
        Order: {order._id.slice(0, 8).toUpperCase()} Passenger: {order.persons}
      </h2>
      <div className="row">{display}</div>
    </div>
  );
};

export default OrderCard;
