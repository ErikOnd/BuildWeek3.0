import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editPost, REFRESH } from "../Redux/actions";
import { useSelector } from "react-redux";

const PostModalEditComponent = ({ data }) => {
  const user = useSelector((state) => state.user.user);

  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState({
    text: data.text,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const closeAndDispatch = (e) => {
    dispatch(editPost(inputValue, data._id));
    handleClose();
    dispatch({
      type: REFRESH,
      payload: e,
    });
    // navigate("/");
  };

  return (
    <>
      <Dropdown.Item eventKey="5" className="py-2" onClick={handleShow}>
        <div className="d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pencil"
            viewBox="0 0 16 16"
          >
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
          </svg>
          <span className="ml-2">Edit post</span>
        </div>
      </Dropdown.Item>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>User comes here</div>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              closeAndDispatch();
            }}
          >
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="What do you want to talk about?"
                value={inputValue.text}
                onChange={(e) =>
                  setInputValue({
                    ...inputValue,
                    text: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => closeAndDispatch("test")}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostModalEditComponent;
