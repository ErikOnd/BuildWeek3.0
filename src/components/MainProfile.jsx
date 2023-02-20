import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { fetchDataAsync } from "../Redux/actions";
import { CameraFill, Pencil } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

const MainProfile = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  let [open, setOpen] = useState(false);
  let [more, setMore] = useState(false);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function setting() {
    if (more === true) {
      return setOpen(false);
    }
    if (open === true) {
      return setOpen(false);
    } else if (open === false) {
      return setOpen(true);
    }
  }
  function setting2() {
    if (more === true) {
      return setMore(false);
    } else {
      return setMore(true);
    }
  }

  useEffect(() => {
    dispatch(fetchDataAsync());
  }, []);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Container>
      {show ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Intro</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <small>*Indicates required</small>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name*</Form.Label>
                <Form.Control type="text" value={user.name} />
                <Form.Label>Last Name*</Form.Label>
                <Form.Control type="text" value={user.surname} />
                <Form.Label>Additional Name</Form.Label>
                <Form.Control type="text" />
                <Form.Text className="text-muted">Name pronunciation</Form.Text>
                <Form.Text className="text-muted">
                  This can only be added using our mobile app
                </Form.Text>
                <Form.Text className="text-muted">Pronouns</Form.Text>
                {/* <Form.Label htmlFor="Select">Disabled select menu</Form.Label>
          <Form.Select id="Select">
            <option>Disabled select</option>
          </Form.Select> */}
                <Form.Text className="text-muted">
                  Let others know how to refer to you.
                </Form.Text>
                <Form.Text className="text-muted">
                  <h4>
                    {" "}
                    Learn more about <a href="">gender pronouns</a>.
                  </h4>
                </Form.Text>
                <Form.Label>*Headline</Form.Label>
                <Form.Control type="text" value={user.title} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        ""
      )}
      {user && (
        <Row className="main">
          <Col sm={8}>
            <div className="upper">
              <img className="profile-pic" src={user.image} alt="Profile-Pic" />
              {/* {Camera} */}
              <h2>
                {user.name} {user.surname}
              </h2>
              <h6>{user.title}</h6>
              <p>
                {user.area} • <a href="">Contact Info</a>
              </p>
              <button
                className="button first"
                onClick={() => {
                  setting();
                }}
              >
                <b>Open to</b>
              </button>
              <button className="button second">
                <b>Add Profile</b>
              </button>
              <button
                className="button third"
                onClick={() => {
                  setting2();
                }}
              >
                <b>More</b>
              </button>
              {open ? (
                <div className="open">
                  <div className="hover">
                    <b>Finding a new job</b>
                    <p>Show recruiters and others that you,re open to work</p>
                  </div>
                  <div className="hover">
                    <b>Hiring</b>
                    <p>
                      Share that you're hiring and attract qualified candidates
                    </p>
                  </div>
                  <div className="hover">
                    <b>Providin Services</b>
                    <p>
                      Showcase services you offer so you and your business can
                      be found in search
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
              {more ? (
                <div className="more">
                  <div className="hover">
                    <p>
                      <b>Send Profile in a message</b>
                    </p>
                  </div>
                  <div className="hover">
                    <p>
                      <b>Save to PDF</b>
                    </p>
                  </div>
                  <div className="hover">
                    <p>
                      <b>Build a resume</b>
                    </p>
                  </div>
                  <div className="hover">
                    <p>
                      <b>About this profile</b>
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </Col>
          <Col sm={4} className="d-flex">
            <img className="side " src={user.image} alt="Profile-Pic" />
            <p className="side-text">
              <b>Epicode</b>
            </p>
            <CameraFill className="camera mt-3" size={40} color="blue" />
            <Pencil
              onClick={() => handleShow()}
              className="pencil"
              size={20}
              color="grey"
            />
          </Col>

          <div className="suggestions d-flex">
            <div className="first-suggestion mx-3 my-5">
              <p>Open to work</p>
              <p>Full-Stack Dev Roles</p>
              <a href="">See all details</a>
            </div>
            <div className="suggestion mx-3 my-5">
              <p>
                <b>Share that you're hiring</b> and attract qualified candidates
              </p>
              <a href="">Get Started</a>
            </div>
            <div className="suggestion mx-3 my-5">
              <p>
                <b>Showcase services</b> you offer so you and your business can
                be found in search
              </p>
              <a href="">Get Started</a>
            </div>
          </div>
        </Row>
      )}
    </Container>
  );
};

export default MainProfile;
