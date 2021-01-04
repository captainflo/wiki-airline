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
        <h2>
          {flight.from} <i className="fas fa-plane"></i> {flight.to}
        </h2>

        <div>{time} hours</div>
      </div>
      <div>{moment(flight.depTime).format('ll')}</div>
      <div>
        {moment(flight.depTime).format('LT')}{' '}
        <i className="fas fa-arrow-circle-right"></i>{' '}
        {moment(flight.arrTime).format('LT')}
      </div>
      <div>{flight.type}</div>
      <div>
        <h2 className="card-trip-pricing">
          $ {flight.price}
          <span>/ Persons</span>
        </h2>
      </div>
    </div>
  );
};

export default ListOrder;
