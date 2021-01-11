import Modals from './Modals';

const Seat = ({ title, flight, search, index, place, changeSeat }) => {
  return (
    <div>
      <img
        className="seat"
        src="https://res.cloudinary.com/dwtc6zep7/image/upload/v1610381377/wiki-airline/icons8-flight-seat-100.png"
        alt="seat"
      />{' '}
      {place}
      <Modals
        title={title}
        flight={flight}
        search={search}
        selected={changeSeat}
        index={index}
      />
    </div>
  );
};

export default Seat;
