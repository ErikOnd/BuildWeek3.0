import Modal from 'react-bootstrap/Modal';

import React, { useState } from 'react';

const SmallModal = () => {
    const [smShow, setSmShow] = useState(false);
return(
    <>
     <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm">  
        <Modal.Body>Add position</Modal.Body>
        <Modal.Body>Add career break</Modal.Body>
      </Modal>
    </>
)

}
export default SmallModal
