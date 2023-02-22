import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { putPost } from "../Redux/actions";
import { useSelector } from "react-redux";

const PostModalComponent = () => {
  const user = useSelector((state) => state.user.user);

  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState({
    text: "",
    username: user.username,
    __v: 0,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ margin: "100px" }}
      >
        Start a post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>User comes here</div>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(putPost(inputValue));
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
          <Button
            variant="primary"
            onClick={() => dispatch(putPost(inputValue))}
          >
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostModalComponent;
