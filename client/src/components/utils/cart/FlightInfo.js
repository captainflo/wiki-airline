import '../../../css/flightInfo.css';
import moment from 'moment';
import Modals from '../Modals';

const FlightInfo = ({
  flight,
  search,
  seat,
  seatSelected,
  returnSeat,
  seatReturnSelected,
}) => {
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
      <p>
        <img
          className="seat"
          src="https://res.cloudinary.com/dwtc6zep7/image/upload/v1610381377/wiki-airline/icons8-flight-seat-100.png"
          alt="seat"
        />{' '}
        {seat.length < search.persons ? (
          <div>
            {seat}
            <Modals
              title={'selected'}
              flight={flight}
              search={search}
              seatSelected={seatSelected}
            />
          </div>
        ) : (
          <div>
            {returnSeat}{' '}
            <Modals
              title={'change'}
              flight={flight}
              search={search}
              seatSelected={seatReturnSelected}
            />
          </div>
        )}
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
