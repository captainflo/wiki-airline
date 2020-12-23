import moment from 'moment';
import '../../css/listCardTrip.css';

const ListCardFlight = ({ flight, selectedFlight }) => {
  const time = moment
    .utc(moment(flight.arrTime).diff(moment(flight.depTime)))
    .format('HH:mm');

  return (
    <div className="card-trip-wrapper" onClick={() => selectedFlight(flight)}>
      <h2>
        {flight.from} <i className="fas fa-plane"></i> {flight.to}
      </h2>
      <div className="card-trip">
        <div className="wrapper-img-card">
          <img
            className="avatar-large"
            alt="avatar-large"
            src={flight.company}
          />
        </div>

        <div>
          <p>{flight.type}</p>
        </div>
        <div>
          {moment(flight.depTime).format('LT')}{' '}
          <i className="fas fa-arrow-circle-right"></i>{' '}
          {moment(flight.arrTime).format('LT')}
        </div>
        <div>{time} hours</div>
        <div>
          <h2 className="card-trip-pricing">$ {flight.price}</h2>
        </div>
      </div>
    </div>
  );
};

export default ListCardFlight;
