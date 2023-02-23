import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Reddit, ArrowDown, Clock } from "react-bootstrap-icons";
import { putPost } from "../Redux/actions";
import { useState } from "react";
import { BiPhotoAlbum, BiDotsHorizontalRounded } from "react-icons/bi";
import {RxVideo} from "react-icons/rx";
import {MdOutlineEventAvailable, MdOutlineArticle} from "react-icons/md";
import {GrEmoji} from "react-icons/gr";
import {BsImage} from  "react-icons/bs";
import {HiDocumentText} from "react-icons/hi"
import {FaRegCommentDots} from "react-icons/fa"
import {BsChevronDown } from "react-icons/bs"




const PostSection = () => {
  const user = useSelector((state) => state.user.user);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const [sort, setSort] = useState(false);

  const [inputValue, setInputValue] = useState({
    text: "",
    username: user.username,
    __v: 0,
  });

  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const sorting = () => {
    if (sort === false) {
      setSort(true);
    } else {
      setSort(false);
    }
  };

  const closeAndDispatch = () => {
    dispatch(putPost(inputValue));
    handleClose();
  };

  return (
    <>
      <Container className="post-section ">
        <Row className="d-flex upper-post-section">
          <img
            className="home-profile-pic mx-2 my-2"
            src={user.image}
            alt="profile-pic"
          />
          <input
            onClick={handleShow}
            className="post-input mx-2 my-2"
            type="text"
            placeholder="Start a post"
          />
        </Row>
        <Row className="d-flex">
          <Col
            className="post-section-option mx-2"
            onClick={() => handleShow2()}
          >
            <BiPhotoAlbum size={20} className="mr-2 album" />
            Photo
          </Col>
          <Col
            className="post-section-option mx-2"
            onClick={() => handleShow3()}
          >
            <RxVideo size={20} className="mr-2 video" />
            Video
          </Col>
          <Col className="post-section-option mx-2">
            <MdOutlineEventAvailable size={20} className="mr-2 event" />
            Event
          </Col>
          <Col className="post-section-option mx-2">
            <MdOutlineArticle size={20} className="mr-2 article" />
            Write Article
          </Col>
        </Row>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create A Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              className="home-profile-pic mx-2 my-2"
              src={user.image}
              alt=""
            />
            <Form.Label>
              {user.name} {user.surname}
            </Form.Label>
            <textarea
              name=""
              id=""
              style={{ width: "100%", height: "200px", border: "transparent" }}
              placeholder="What do you want to talk about"
              value={inputValue.text}
              onChange={(e) =>
                setInputValue({
                  ...inputValue,
                  text: e.target.value,
                })
              }
              // onChange={(i) => setCount(i.target.value.length)}
            ></textarea>
            <GrEmoji size={20} className="mr-2" />
            Add Hashtag
          </Modal.Body>
          <Modal.Footer>
            <Container>
              <Row>
                <Col sm={4} className="post-modal-icons-container">
                  <BsImage size={20} className="mr-2 my-2 icon" />
                  <RxVideo size={20} className="mr-2 my-2 icon" />
                  <HiDocumentText size={20} className="mr-2 my-2 icon" />
                  <BiDotsHorizontalRounded size={20} className="mr-2 my-2 icon" />
                </Col>
                <Col className="d-flex">
                  <button className="anyone">
                    {" "}
                    <FaRegCommentDots />
                  
                    Anyone
                  </button>
                  <div className="end-of-modal ">
                    <Clock size={20} className="mr-2" />

                    <Button
                      variant="primary"
                      onClick={() => {
                        closeAndDispatch();
                      }}
                    >
                      Post
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Modal.Footer>
        </Modal>

        {/* second modal */}
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Edit your photo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="picture-video">
              <a>Select images to share</a>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose2} disabled>
              Done
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Third Modal */}
        <Modal show={show3} onHide={handleClose3}>
          <Modal.Header closeButton>
            <Modal.Title>Select/Edit your video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="picture-video">
              <a>Select video to share</a>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose3}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose3} disabled>
              Done
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <br />
      <Container className="post-section-sort">
        <div className="line"></div>

        <small onClick={() => sorting()}>
          Sort By: <b> Top</b> <BsChevronDown />
        </small>
        {sort ? (
          <div className="top-recent">
            <p>
              <b>Top</b>
            </p>
            <p>
              <b>Recent</b>
            </p>
          </div>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default PostSection;
