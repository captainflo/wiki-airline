import { useState } from 'react';
import '../../css/plane.css';

const seats = ['A1', 'B1', 'C1', 'A2', 'B2', 'C2', 'A3', 'B3', 'C3'];
const seatsRight = ['D1', 'E1', 'F1', 'D2', 'E2', 'F2', 'D3', 'E3', 'F3'];

const Plane = ({ selected, index, handleClose }) => {
  const [selectedSeat, setSelectedSeat] = useState();

  const displayLeftSide = seats.map((seat, i) => {
    return (
      <p key={i} onClick={() => setSelectedSeat(seat)}>
        <img
          className="img-fuild seat-img"
          src="https://res.cloudinary.com/dwtc6zep7/image/upload/v1610464460/wiki-airline/download.png"
        />
      </p>
    );
  });

  const displayRightSide = seatsRight.map((seat, i) => {
    return (
      <p key={i} onClick={() => setSelectedSeat(seat)}>
        <img
          className="img-fuild seat-img"
          src="https://res.cloudinary.com/dwtc6zep7/image/upload/v1610464460/wiki-airline/download.png"
        />
      </p>
    );
  });
  return (
    <div>
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <img
            className="img-fuild img-plane"
            src="https://res.cloudinary.com/dwtc6zep7/image/upload/v1610462841/wiki-airline/plane.png"
          />
          <div className="wrapper-seat">
            <div className="row">
              <div className="col-md-6 col-6">
                <div className="d-flex  seat-plane flex-wrap">
                  {displayLeftSide}
                </div>
              </div>
              <div className="col-md-6 col-6">
                <div className="d-flex  seat-plane flex-wrap">
                  {displayRightSide}
                </div>
              </div>
            </div>
          </div>
          <button onClick={() => selected(index, selectedSeat, handleClose)}>
            save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plane;
