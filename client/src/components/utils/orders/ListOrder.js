import '../../../css/orderCard.css';
import moment from 'moment';

const ListOrder = ({ flight }) => {
  const time = moment
    .utc(moment(flight.arrTime).diff(moment(flight.depTime)))
    .format('HH:mm');
  return (
    <div>
      <img className="company" alt="avatar-large" src={flight.company} />
      <div className="title-list-order">
        <div>
          {flight.from} <i className="fas fa-plane"></i> {flight.to}
        </div>

        <div>{time} hours</div>
      </div>
      <div className="title-list-order">
        <div>{flight.type}</div>
        <div>
          {moment(flight.depTime).format('LT')}{' '}
          <i className="fas fa-arrow-circle-right"></i>{' '}
          {moment(flight.arrTime).format('LT')}
        </div>
      </div>
      <div>
        <h2 className="card-trip-pricing">$ {flight.price}/ Persons</h2>
      </div>
    </div>
  );
};

export default ListOrder;
