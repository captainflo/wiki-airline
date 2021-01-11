import '../../../css/flightCart.css';
import FlightInfo from './FlightInfo';
import StripeCheckout from 'react-stripe-checkout';

const FlightCart = ({
  wayFlight,
  returnFlight,
  search,
  costWay,
  costReturn,
  user,
  createOrder,
  seat,
}) => {
  let total = (costWay + costReturn) * search.persons;
  return (
    <div className="container">
      <div className="wrapper-flightCart">
        <h2>
          {search.from} to {search.to}
        </h2>
        {Object.keys(wayFlight).length ? (
          <FlightInfo flight={wayFlight} search={search} seat={seat} />
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
              <FlightInfo flight={returnFlight} search={search} seat={seat} />
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
        <div className="text-center">
          {search.returnDate && Object.keys(returnFlight).length === 0 ? (
            ''
          ) : (
            <div>
              {Object.keys(wayFlight).length !== 0 ? (
                <StripeCheckout
                  token={({ id }) =>
                    createOrder({
                      valueForm: {
                        wayFlight,
                        returnFlight,
                        total,
                        user,
                        token: id,
                        search,
                      },
                    })
                  }
                  stripeKey={process.env.REACT_APP_STRIPE_KEY}
                  amount={total * 100}
                  name="Wiki Airline"
                >
                  <button className="btn btn-primary ">Payment</button>
                </StripeCheckout>
              ) : (
                ''
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
// Object.keys(wayFlight).length !== 0
export default FlightCart;
