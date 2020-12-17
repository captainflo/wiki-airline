import '../../css/welcome.css';
import Search from '../utils/search/Search';

const Welcome = () => {
  // let flights = [
  //   {
  //     AirportName: 'Los Angeles',
  //     from: 'Los Angeles',
  //     to: 'Miami',
  //     Departure: '25 Jun 2019',
  //     Arrival: '25 Jun 2019',
  //     depTime: '1:05 AM',
  //     arrTime: '2:05 AM',
  //     price: 100,
  //     type: 'Economy',
  //     avatar: '',
  //   },
  // ];
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-body">
          <h1 className="display-4">Book your flight</h1>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
