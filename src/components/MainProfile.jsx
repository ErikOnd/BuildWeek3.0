import { useEffect, useState, useInterval } from "react";
import { Container, Row, Col, Button, Modal, Form,Spinner,Alert } from "react-bootstrap";
import { fetchDataAsync, postProfilePicture } from "../Redux/actions";
import { CameraFill, Key, Pencil } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { userUpdate } from "../Redux/actions";
import { MDBCheckbox } from 'mdb-react-ui-kit'

const MainProfile = () => {
  const user = useSelector((state) => state.user.user);
  let isLoading=useSelector((state) => state.user.isLoading)
  let isError=useSelector((state) => state.user.isError)

  let [open, setOpen] = useState(false);
  let [more, setMore] = useState(false);
  let [name, setName] = useState(user.name);
  let [surname, setSurname] = useState(user.surname);
  let [title, setTitle] = useState(user.title);
  let [image, setImg] = useState(user.image);
  let [id, setId] = useState(user._id);
  let [core, setCore] = useState(true);
  let [recommended, setRecommended] = useState(false);
  let [additional, setAdditional] = useState(false);

  const setting3 = () => {
    if (recommended === true || additional === true) {
      return setCore(false);
    }
    if (core === true) {
      return setCore(false);
    } else if (core === false) {
      return setCore(true);
    }
  };
  const setting4 = () => {
    if (core === true || additional === true) {
      setRecommended(false);
    }
    if (recommended === true) {
      return setRecommended(false);
    } else if (recommended === false) {
      return setRecommended(true);
    }
  };

  const setting5 = () => {
    if (core === true || recommended === true) {
      setAdditional(false);
    }
    if (additional === true) {
      return setAdditional(false);
    } else if (additional === false) {
      return setAdditional(true);
    }
  };
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

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
    if (open === true) {
      return setMore(false);
    }
    if (more === true) {
      return setMore(false);
    } else {
      return setMore(true);
    }
  }

  const handleImage = (e) => {
    console.log(e.target.files[0].name);
    setImg(e.target.files[0]);
  };
  let item = { name, surname, title };

    
  console.log(item);
  const both = () => {
 isLoading=true
    const formData =  new FormData();
   formData.append("profile", image);
   dispatch(userUpdate(item))
   
    dispatch(postProfilePicture(id,formData))

    handleClose()
   
  };

  return (
    
    <Container id="main-profile-content">
        {isError ?<Alert key={"error"} variant={"danger"}>
        Thre was an error!!</Alert>
      :<>{show ? (
        <Modal show={show} onHide={handleClose} dialogClassName="profile-modal">
          <Modal.Header closeButton>
            <Modal.Title>Edit Intro</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <small>*Indicates required</small>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name*</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Form.Label>Last Name*</Form.Label>
                <Form.Control
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
                <Form.Label>Additional Name</Form.Label>
                <Form.Control type="text" />
                <Form.Text className="text-muted">Name pronunciation</Form.Text>
                <Form.Text className="text-muted">
                  This can only be added using our mobile app
                </Form.Text>
                <Form.Label>Pronouns</Form.Label>
                <Form.Control as={"select"} required>
                  <option>Please Select</option>
                  <option>She/Her</option>
                  <option>He/Him</option>
                  <option>They/Them</option>
                  <option>Custom</option>
                </Form.Control>
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
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Form.Label>Picture Url</Form.Label>
                <Form.Control
                  type="file"
               
                  accept="image/*"
                  onChange={handleImage}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={() => both()}>
              Save
            </Button>

          </Modal.Footer>
        </Modal>
      ) : (
        ""
      )}
      {show2 ? (
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Add to profile</Modal.Title>
          </Modal.Header>

          <Modal.Header onClick={() => setting3()}>
            <Modal.Title>Core</Modal.Title>
          </Modal.Header>
          {core ? (
            <>
              <Modal.Body>
                Start with the basics. Filling out these sections will help you
                be discovered by recruiters and people you may know
              </Modal.Body>
              <Modal.Body>
                <div className="modal-text">
                  <b> Add about</b> <br />
                </div>
                <div className="modal-text">
                  <b> Add education</b> <br />
                </div>
                <div className="modal-text">
                  <b> Add Position</b> <br />
                </div>
                <div className="modal-text">
                  <b> Add Career Break</b> <br />
                </div>
                <div className="modal-text">
                  <b> Add Skills br</b>
                </div>
              </Modal.Body>
            </>
          ) : (
            ""
          )}
          <Modal.Header onClick={() => setting4()}>
            <Modal.Title>Recommended</Modal.Title>
          </Modal.Header>
          {recommended ? (
            <Modal.Body>
              Completing these sections will increase your credibility and give
              you access to more opportunities
              <div className="modal-text">
                <b> Add featured </b> <br />
              </div>
              <div className="modal-text">
                <b> Add licenses & certifications </b> <br />
              </div>
              <div className="modal-text">
                <b> Add courses </b> <br />
              </div>
              <div className="modal-text">
                <b>Add recommendations </b> <br />
              </div>
            </Modal.Body>
          ) : (
            ""
          )}
          <Modal.Header onClick={() => setting5()}>
            <Modal.Title>Additional</Modal.Title>
          </Modal.Header>
          {additional ? (
            <Modal.Body>
              Add even more personality to your profile. These sections will
              help you grow your network and build more relationships.
              <br />
              <div className="modal-text">
                <b> Add volunteer experience </b>
                <br />
              </div>
              <div className="modal-text">
                <b> Add publications </b>
                <br />
              </div>
              <div className="modal-text">
                <b>Add patents </b>
                <br />
              </div>
              <div className="modal-text">
                <b>Add projects </b>
                <br />
              </div>
              <div className="modal-text">
                <b>Add honors & awards </b>
                <br />
              </div>
              <div className="modal-text">
                <b>Add test scores </b>
                <br />
              </div>
              <div className="modal-text">
                <b>Add languages </b>
                <br />
              </div>
              <div className="modal-text">
                <b>Add organizations </b>
                <br />
              </div>
              <div className="modal-text">
                <b>Add causes </b>
                <br />
              </div>
              <div className="modal-text">
                <b>Add contact info </b> <br />
              </div>
            </Modal.Body>
          ) : (
            ""
          )}
          <Modal.Footer></Modal.Footer>
        </Modal>
      ) : (
        ""
      )}
      {user && (
        <Container
        
          className="main"
          style={{ width: "780px", marginLeft: "-1em" }}
        >
          
          <Row className="upper">
            <img className="profile-pic2" src={user.image} alt="" />
            <CameraFill className="camera mt-3" size={40} color="blue" />
          </Row>
          <Row className="lower">
            <Col sm={8}>
              {isLoading ? <Spinner animation="border" variant="success" />:""}
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
                {" "}
                <b>Open to</b>
              </button>
              <button className="button second" onClick={handleShow2}>
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
            </Col>
            <Col sm={4} className="d-flex">
              <img
                className="side "
                src="https://media.licdn.com/dms/image/C4D0BAQEFWO_s8a0FHQ/company-logo_100_100/0/1647618816994?e=1684972800&v=beta&t=TPNYWQvNS5llJxWVNsaOC9JuymAFPxR8tOSYYjqu8Q4"
                alt="Profile-Pic"
              />
              <p className="side-text">
                <b>Epicode</b>
              </p>

              <Pencil
                onClick={() => handleShow()}
                className="pencil mr-4"
                size={20}
                color="grey"
              />
            </Col>
          </Row>
        </Container>
               
      )}
      </>} </Container>
  );
};

export default MainProfile;
