import moment from 'moment';
import '../../css/listCardTrip.css';

const ListCardFlight = ({ flight }) => {
  return (
    <div className="card-trip">
      <div>
        <img className="avatar-large" alt="avatar-large" src={flight.photo} />
        <h2>
          {flight.from} <i className="fas fa-plane"></i> {flight.to}
        </h2>
      </div>
      <div>
        <p>{flight.type}</p>
      </div>
      <div>
        {moment(flight.depTime).format('LT')}{' '}
        <i className="fas fa-arrow-circle-right"></i>{' '}
        {moment(flight.arrTime).format('LT')}
      </div>
      <p>3h18 m</p>
      <h2 className="card-trip-pricing">$ {flight.price}</h2>
    </div>
  );
};

export default ListCardFlight;
