import '../../css/flightCart.css';
import moment from 'moment';

const FlightCart = ({
  wayFlight,
  search,
  returnFlight,
  costWay,
  costReturn,
}) => {
  let total = (costWay + costReturn) * search.persons;
  return (
    <div className="container">
      <div className="wrapper-flightCart">
        <h2>
          {search.from} to {search.to}
        </h2>
        {Object.keys(wayFlight).length ? (
          <div>
            <p>
              <i className="fas fa-plane"></i> {wayFlight._id}
            </p>
            <p>
              <i className="fas fa-plane-departure"></i>{' '}
              {moment(wayFlight.depTime).format('MMMM Do YYYY, h:mm a')}
            </p>
            <p>
              <i className="fas fa-plane-arrival"></i>{' '}
              {moment(wayFlight.arrTime).format('MMMM Do YYYY, h:mm a')}
            </p>
            <p>
              <i className="fas fa-male"></i> {search.persons} passenger
            </p>
            {/* <p>
              {totalWay}$ ({search.persons}passenger(s) x {wayFlight.price} $)
            </p> */}
          </div>
        ) : (
          'Select your flight'
        )}
        {search.returnDate ? (
          <div>
            <h2>
              {search.to} to {search.from}
            </h2>

            {Object.keys(returnFlight).length ? (
              <div>
                <p>
                  <i className="fas fa-plane"></i> {returnFlight._id}
                </p>
                <p>
                  <i className="fas fa-plane-departure"></i>{' '}
                  {moment(returnFlight.depTime).format('MMMM Do YYYY, h:mm a')}
                </p>
                <p>
                  <i className="fas fa-plane-arrival"></i>{' '}
                  {moment(returnFlight.arrTime).format('MMMM Do YYYY, h:mm a')}
                </p>
                <p>
                  <i className="fas fa-male"></i> {search.persons} passenger
                </p>
                {/* <p>
              {totalReturn}$ ({search.persons}passenger(s) x{' '}
              {returnFlight.price} $)
            </p> */}
              </div>
            ) : (
              'Select your flight'
            )}
          </div>
        ) : (
          ''
        )}

        <div>Total: {total}</div>
      </div>
    </div>
  );
};

export default FlightCart;
