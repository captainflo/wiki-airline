const OrderCard = ({ order }) => {
  const displayOrders = order.map((plane) => {
    <div>{plane.flight._id}</div>;
  });

  return <div>{displayOrders}</div>;
};

export default OrderCard;
