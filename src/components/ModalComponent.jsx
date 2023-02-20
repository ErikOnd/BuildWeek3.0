import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

const ModalComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Work
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Work</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Visit More LinkedIn Products</p>
          <div>
            <div>Learning</div>
            <div>Insights</div>
            <div>Post a job</div>
            <div>Advertise</div>
            <div>Sell</div>
            <div>Groups</div>
            <div>Services Marketplace</div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <p>LinkedIn Business Services</p>
          <div>
            <div>
              <p>Talent Solutions</p>
              <span>Find, attract and recruit talent</span>
            </div>
            <div>
              <p>Sales Solutions</p>
              <span>Unlock sales opportunities</span>
            </div>
            <div>
              <p>Post a job for free</p>
              <span>Get your job in front of quality candidates</span>
            </div>
            <div>
              <p>Marketing Solutions</p>
              <span>Acquiere customers and grow your business</span>
            </div>
            <div>
              <p>Learning Solutions</p>
              <span>Develop talent across your organization</span>
            </div>
            <p>Create a Company page +</p>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
