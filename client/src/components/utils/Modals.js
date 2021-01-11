import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Modals = ({ flight, search, selected, title, index }) => {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <span className="text-danger" onClick={() => setLgShow(true)}>
        {title} seat
      </span>
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="modal1"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal">
            {flight.from} -- {flight.to}: {title} your seat
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <p onClick={() => selected(index, 'HBD')}>seat one</p>
            <p onClick={() => selected(index, 'FGV')}>seat two</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modals;
