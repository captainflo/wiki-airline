import '../../css/flightCard.css';
import moment from 'moment';
import { Link } from 'react-router-dom';

const FlightCard = ({ flight, onSubmit, user }) => {
  return (
    <div className="flightCard">
      <div className="flightCard-wrapper">
        <img className="img-fluid" src={flight.photo} alt="backgroung" />
      </div>
      <div className="card-body body-flightCard">
        <h6>
          <i className="fas fa-map-signs"></i> {flight.from} to {flight.to}
        </h6>
        <p>
          <i className="far fa-calendar-alt"></i>{' '}
          {moment.utc(flight.depart).format('ll')} at{' '}
          <i className="far fa-clock"></i> {moment(flight.depTime).format('LT')}
        </p>
        <p>{flight.type}</p>

        <p className="price">$ {flight.price}</p>
      </div>
      {user ? (
        <div
          onClick={() => onSubmit(flight)}
          className="text-center card-footer"
        >
          <button className="btn btn-primary">View Detail</button>
        </div>
      ) : (
        <div className="text-center card-footer">
          <Link className="btn btn-primary" to="/signin">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};
export default FlightCard;
