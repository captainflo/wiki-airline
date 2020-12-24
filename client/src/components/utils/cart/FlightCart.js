import '../../../css/flightCart.css';
import FlightInfo from './FlightInfo';

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
          <FlightInfo flight={wayFlight} search={search} />
        ) : (
          'Select your flight'
        )}
        <hr></hr>
        {search.returnDate ? (
          <div>
            <h2>
              {search.to} to {search.from}
            </h2>

            {Object.keys(returnFlight).length ? (
              <FlightInfo flight={returnFlight} search={search} />
            ) : (
              'Select your flight'
            )}
          </div>
        ) : (
          ''
        )}
        <hr></hr>
        <div className="total-price">
          Total: <span>${total}</span>
        </div>
      </div>
    </div>
  );
};

export default FlightCart;
