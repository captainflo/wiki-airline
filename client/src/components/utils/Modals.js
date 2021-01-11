import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Modals = ({ flight, search, seatSelected, title }) => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <span className="text-danger" onClick={() => setLgShow(true)}>
        Select seat
      </span>
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="modal1"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal">
            {flight.from} -- {flight.to}: {title} your seat ({search.persons})
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <p onClick={() => seatSelected('one')}>seat one</p>
            <p onClick={() => seatSelected('two')}>seat two</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modals;
