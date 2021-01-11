import '../../../css/flightInfo.css';
import moment from 'moment';

const FlightInfo = ({ flight, search, seat }) => {
  const total = search.persons * flight.price;
  return (
    <div className="flight-info-wrapper">
      <p className="plane-info">
        {flight._id.slice(0, 6).toUpperCase()} <i className="fas fa-plane"></i>{' '}
        <span></span>
      </p>
      <p className="departure">
        <i className="fas fa-plane-departure"></i>{' '}
        {moment(flight.depTime).format('MMMM Do, h:mm a')}
      </p>
      <p className="return">
        <i className="fas fa-plane-arrival"></i>{' '}
        {moment(flight.arrTime).format('MMMM Do, h:mm a')}
      </p>
      <p className="passenger">
        <i className="fas fa-male"></i> {search.persons} passenger(s)
      </p>

      <p className="detail-price">
        <span>
          ( {search.persons} x ${flight.price} )
        </span>{' '}
        ${total}
      </p>
    </div>
  );
};
export default FlightInfo;
