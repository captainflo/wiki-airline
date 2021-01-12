import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Plane from './Plane';

const Modals = ({ flight, search, selected, title, index, custom }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <span className={custom} variant="primary" onClick={handleShow}>
        {title} seat
      </span>

      <Modal
        size="xl"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="modal1"
      >
        <Modal.Header>
          <Modal.Title id="modal">
            {' '}
            {flight.from} -- {flight.to}: {title} your seat
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Plane selected={selected} index={index} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modals;
