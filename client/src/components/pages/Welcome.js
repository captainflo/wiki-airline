import '../../css/welcome.css';
import Search from '../utils/search/Search';
import SampleFlights from '../utils/SampleFlights';

const Welcome = () => {
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="banner-body">
            <h1 className="display-4">Book your flight</h1>
            <Search />
          </div>
        </div>
      </div>
      <SampleFlights />
    </div>
  );
};

export default Welcome;
