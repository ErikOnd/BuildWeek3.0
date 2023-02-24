import { useEffect } from "react";
import {
  compareAsc,
  format,
  formatDuration,
  differenceInMonths,
} from "date-fns";
import {
  Container,
  Row,
  Col,
  Button,
  Badge,
  Modal,
  Form,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllExperienceAsync,
  postExperienceAsync,
  postExperiencePicture,
} from "../Redux/actions";
import React, { useState } from "react";
import { BsFillCalendarFill } from "react-icons/bs";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { putExperienceAsync } from "../Redux/actions";
import { deleteExperienceAsync } from "../Redux/actions";
import { UPDATE_EXPERIENCE } from "../Redux/actions";import Dropdown from 'react-bootstrap/Dropdown';
import { MDBCheckbox } from "mdb-react-ui-kit";
import PositionModal from "./PositionModal";
import EditModal from "./editModal";
const LowerProfile = () => {
  const experienceData = useSelector((state) => state.experience.list);
  const dispatch = useDispatch();

  const updatExperience = useSelector((state) => state.experience.update);

  const [experienceInfo, setExperienceInfo] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const formatDate = (exData) => {
    const date = new Date(exData);
    return format(date, "MMM yyyy");
  };

  const calculateDiff = (date1, date2) => {
    const diffInMonths = differenceInMonths(new Date(date1), new Date(date2));
    const duration = formatDuration({
      years: Math.floor(diffInMonths / 12),
      months: diffInMonths % 12,
    })
      .replace("year", "yr")
      .replace("years", "yrs")
      .replace("months", "mos");

    return duration;
  };

  useEffect(() => {
    dispatch(getAllExperienceAsync());
  }, [updatExperience]);

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const changeExperienceInfo = (id) => {
    let currentExperience = experienceData.filter(
      (experience) => experience._id === id
    );
    setExperienceInfo(currentExperience[0]);
  };

  // --------------------
  const date = new Date();
  const user = useSelector((state) => state.user.user);
  let [name, setName] = useState(user.name);
  let [surname, setSurname] = useState(user.surname);
  let [title, setTitle] = useState(user.title);
  let [id, setId] = useState(user._id);
  let [working, setWorking] = useState(false);
  let [skill, setSkill] = useState(false);
  let [media, setMedia] = useState(false);
  let [on, setOn] = useState(false);
  const [count, setCount] = useState(0);
  let [quit, setQuit] = useState(false);
  let [startMonth, setStartMonth] = useState("");
  let [endMonth, setEndMonth] = useState("");
  let [startYear, setStartYear] = useState("");
  let [endYear, setEndYear] = useState("");

  const addStart = () => {
    setExperienceInfo({
      ...experienceInfo,
      startDate: startYear + " " + startMonth,
    });
  };

  const addEnd = () => {
    setExperienceInfo({
      ...experienceInfo,
      endDate: endYear + " " + endMonth,
    });
  };

  const [smShow, setSmShow] = useState(false);

  useEffect(() => {
    addStart();
  }, [startYear, startMonth]);
  useEffect(() => {
    addEnd();
  }, [endYear, endMonth]);

  useEffect(() => {
    addStart();
  }, [startYear, startMonth]);
  useEffect(() => {
    addEnd();
  }, [endYear, endMonth]);
  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
    );
  let years = arrayRange(1923, 2023, 1);
  useEffect(() => {
    setSkill(false);
  }, []);
  const ons = () => {
    if (on === false) {
      setOn(true);
    } else {
      setOn(false);
    }
  };
  const setmed = () => {
    if (media === true) {
      setMedia(false);
    } else {
      setMedia(true);
    }
  };
  const work = () => {
    if (working === true) {
      setWorking(false);
      setExperienceInfo({ ...experienceInfo, endDate: "present" });
    } else {
      setWorking(true);
    }
  };
  const quitting = () => {
    if (quit === false) {
      setQuit(true);
      setExperienceInfo({ ...experienceInfo, endDate: date });
    }
  };
  // ---------------------

  const deleteAndClose = () => {
    handleClose2();
    dispatch(deleteExperienceAsync(currentExperience)).then(() => {
      dispatch(getAllExperienceAsync());
    });

    console.log(123);
  };
  const saveAndClose = () => {
    handleClose3();
    handleClose2();
    handleClose();
    dispatch(postExperienceAsync(experienceInfo));
    const formData = new FormData();
    formData.append("experience", image);

    dispatch(postExperiencePicture(user._id, currentExperience, formData));
  };

  const updateAndClose = () => {
    handleClose3();
    handleClose2();
    handleClose();
    // uploadPicture()
    dispatch(putExperienceAsync(experienceInfo, currentExperience)).then(() => {
      dispatch(getAllExperienceAsync());
    });
    const formData = new FormData();
    formData.append("experience", image);

     dispatch(postExperiencePicture(user._id, currentExperience, formData));
  };

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const [disabledInput, setDisabledInput] = useState("");

  const [day, setDay] = useState("01");
  const [checked, setChecked] = useState(false);

  const [experience, setExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
    startYear: "",
    endYear: "",
    startMonth: "",
    endMonth: "",
  });
  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);

  const onChangeHandler = (value, fieldToSet) => {
    setExperience({
      ...experience,
      [fieldToSet]: value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    let randomDay = Math.floor(Math.random() * 28);
    if (randomDay < 10) {
      setDay(`0${randomDay}`);
    } else {
      setDay(randomDay);
    }

    let newExperience = {
      role: experience.role,
      company: experience.company,
      startDate: `${experience.startYear}-${experience.startMonth}-${day}`,
      endDate:
        experience.endMonth !== "" && experience.endYear !== ""
          ? `${experience.endYear}-${experience.endMonth}-${day}`
          : null,
      description: experience.description,
      area: experience.area,
    };

    /*    console.log("new experience", newExperience); */

    setExperience({
      type: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
      startYear: "",
      endYear: "",
      startMonth: "",
      endMonth: "",
    });
    handleClose();
  };

  const [currentExperience, setCurrentExperience] = useState();

  
  let [image, setImg] = useState("");
  const handleImage = (e) => {
    console.log(e.target.files[0].name);
    setImg(e.target.files[0]);
  };

  {
 
  const [showopt,setShowOpt]=useState(false)
  const setOpt=()=> {
    if (showopt === true) {
      setShowOpt(false);
    } else {
      setShowOpt(true);
    }
  }
  return (
    <Container>
      <Row>
        <Col className="lp box-style">
          <Row>
            <Col className="box-h1">Analytics</Col>
          </Row>
          <Row>
            <Col className="mb-1">
              <i className="bi bi-eye-fill icon-style eye-lp"></i>Private to you
            </Col>
          </Row>
          <Row className="flex-column flex-lg-row">
            <Col className="box-h2">
              <i className="bi bi-people-fill icon-style"></i> 15 profile views
              <p className="lp-description">
                Discover who's viewed your profile.
              </p>
            </Col>
            <Col className="box-h2">
              <i className="bi bi-bar-chart-line-fill icon-style"></i> 178 post
              impressions{" "}
              <p className="lp-description">
                Check out who's engaging with your posts.
              </p>
            </Col>
            <Col className="box-h2">
              <i className="bi bi-search icon-style pr-1"></i>3 search
              appearances
              <p className="lp-description">
                See how often you appear in search results.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col className="lp box-style">
          <Row>
            <Col className="box-h1">Resources</Col>
          </Row>
          <Row>
            <Col className="mb-1">
              <i className="bi bi-eye-fill icon-style eye-lp"></i>Private to you
            </Col>
          </Row>
          <Row className="flex-column">
            <Col className="box-h2 creator-mode">
              <i className="bi bi-router-fill icon-style"></i> Creator mode
              <Badge className="badge-lp ml-1">Off</Badge>
              <p className="lp-description">
                Get discovered, showcase content on your profile, and get access
                to creator tools
              </p>
            </Col>
            <Col className="box-h2 mt-2">
              <i className="bi bi-people-fill icon-style"></i> My network
              <p className="lp-description">
                See and manage your connections and interests
              </p>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center bottom-row">
            <span className="lp-bottom-text pointer">Show all 5 resources</span>
            <i className="bi bi-arrow-right ml-2 arrow-bottom"></i>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col className="lp box-style ">
          <Row className="d-flex">
            <Col className="box-h1 mb-3">About</Col>
            <Col className="box-h1 mb-3 d-flex justify-content-end">
              <i className="bi bi-pen"></i>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="lb-about">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                modi magni deleniti voluptatem consequuntur in, vel aperiam
                minima aut aliquam odit alias molestiae sequi repudiandae
                recusandae suscipit dignissimos? Praesentium beatae aperiam,
                harum quos iste dolor voluptatum quam at placeat illo debitis
                cupiditate fugiat.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col className="lp box-style">
          <Row>
            <Col className="box-h1">Activity</Col>
            <Col className="box-h1 d-flex justify-content-end">
              <span className="start-post pointer">Start a post</span>
            </Col>
          </Row>
          <Row>
            <Col className="mb-1 mb-2">
              <a href="test" className="lp-a-tag">
                42 followers
              </a>
            </Col>
          </Row>
          <Row className="flex-column">
            <Col className="box-h2 creator-mode">
              You haven't posted lately
              <p className="lp-des-no-margin">
                Get discovered, showcase content on your profile, and get access
                to creator tools
              </p>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <span className="lp-bottom-text pointer">Show all activity</span>
            <i className="bi bi-arrow-right ml-2 arrow-bottom"></i>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col className="lp box-style">
          <Row>
            <Col className="box-h1">Experience</Col>
            <Col className="box-h1 mb-3 d-flex justify-content-end">
            <Dropdown>
  <Dropdown.Toggle
    variant="text-dark"
    id="dropdown-basic"
    size="lg"
    bsPrefix
    className="btn-icon-only"
  >
    <i className="bi bi-plus-lg mr-4 plus-btn" ></i>
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1"onClick={() => {
                  handleShow3();
                }} ><BsFillBriefcaseFill/> Add position</Dropdown.Item>
    <Dropdown.Item href="#/action-2" onClick={handleShow}><BsFillCalendarFill/>  Add career break</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
              <div
                className="d-flex mb-1 add-position-experience-effect-on-hover"
              >
              <i
                className="bi bi-plus-lg mr-4"
                onClick={() => {
                  setExperienceInfo({
                    role: "",
                    company: "",
                    startDate: "",
                    endDate: "",
                    description: "",
                    area: "",
                  });
                  setSmShow(true);
                }}
              ></i> </div>
              <div className="d-flex mb-1 add-position-experience-effect-on-hover">
                <div className="mr-2"></div>
              </div>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Add career break</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form className="experiencesModal">
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Type*</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ex. Retirement"
                        required
                        value={experienceInfo.role}
                        onChange={(i) =>
                          setExperienceInfo({
                            ...experienceInfo,
                            role: i.target.value,
                          })
                        }
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Location*</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ex. London, United Kingdom"
                        required
                        value={experienceInfo.area}
                        onChange={(i) =>
                          setExperienceInfo({
                            ...experienceInfo,
                            area: i.target.value,
                          })
                        }
                      />
                    </Form.Group>
                    <Form.Group className="d-flex align-items-center">
                      <Form.Control
                        type="checkbox"
                        className="d-inline-block checkboxInput mr-2"
                        checked={checked}
                        onChange={(e) => {
                          if (checked === true) {
                            setDisabledInput(false);
                          } else {
                            onChangeHandler("", "endDate");
                            onChangeHandler("", "endMonth");
                            onChangeHandler("", "endYear");
                            setDisabledInput(true);
                          }
                          setChecked(e.target.checked);
                        }}
                      />
                      <Form.Label className="mb-0">
                        I am currently on this career break.
                      </Form.Label>
                    </Form.Group>
                    <Form.Group className="d-flex flex-column">
                      <Form.Label>Start date</Form.Label>

                      <div className="d-flex flex-row justify-content-between">
                        <Form.Control
                          as="select"
                          className="monthSelectInput"
                          required
                          value={startMonth}
                          onChange={(i) => {
                            setStartMonth(() => (startMonth = i.target.value));
                          }}
                        >
                          <option>Month</option>
                          <option>January</option>
                          <option>February</option>
                          <option>March</option>
                          <option>April</option>
                          <option>May</option>
                          <option>June</option>
                          <option>July</option>
                          <option>August</option>
                          <option>September</option>
                          <option>October</option>
                          <option>November</option>
                          <option>December</option>
                        </Form.Control>

                        <Form.Control
                          type="number"
                          min={1900}
                          max={2023}
                          placeholder="Year"
                          className="yearSelectInput"
                          value={startYear}
                          onChange={(i) => setStartYear(() => i.target.value)}
                        ></Form.Control>
                      </div>
                    </Form.Group>
                    <Form.Group className="d-flex flex-column ">
                      <Form.Label>End date</Form.Label>
                      <div className="d-flex flex-row justify-content-between">
                        <Form.Control
                          as="select"
                          disabled={disabledInput}
                          className="monthSelectInput"
                          value={endMonth}
                          onChange={(i) =>
                            setEndMonth(() => (endMonth = i.target.value))
                          }
                        >
                          <option>Month</option>
                          <option>January</option>
                          <option>February</option>
                          <option>March</option>
                          <option>April</option>
                          <option>May</option>
                          <option>June</option>
                          <option>July</option>
                          <option>August</option>
                          <option>September</option>
                          <option>October</option>
                          <option>November</option>
                          <option>December</option>
                        </Form.Control>
                        <Form.Control
                          type="number"
                          min={1900}
                          max={2023}
                          placeholder="Year"
                          className="yearSelectInput"
                          disabled={disabledInput}
                          value={endYear}
                          onChange={(i) => {
                            setEndYear(() => (endYear = i.target.value));
                          }}
                        ></Form.Control>
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        className="add-experience-description"
                        as="textarea"
                        rows={3}
                        value={experienceInfo.description}
                        onChange={(i) =>
                          setExperienceInfo({
                            ...experienceInfo,
                            description: i.target.value,
                          })
                        }
                        onKeyDown={(i) => setCount(i.target.value.length)}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="primary"
                    className="saveButtonExperiencesModal"
                    onClick={saveAndClose}
                  >
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col> 
          </Row>
          {experienceData.map((e) => {
            return (
              <div className="experience-holder" key={e._id}>
                <Row className="flex-column">
                  <Col className="box-h2">
                    <img
                      src={
                        e.image !== undefined
                          ? e.image
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPiyVMnDfuHqeZ9W5Zm-BZBC41CQOCADBHxw&usqp=CAU"
                      }
                      // alt="company logo"
                      className="experience-logo "
                    />
                    <span className="ex-role">{e.role}</span>
                    {console.log(e.image)}
                    <i
                      className="bi bi-pen float-right"
                      onClick={() => {
                        changeExperienceInfo(e._id);
                        setCurrentExperience(e._id);
                        handleShow2();
                      }}
                    ></i>
                    <span className="experience-p-strong">{e.company}</span>
                    <span className="experience-p">
                      {formatDate(e.startDate) + " - " + formatDate(e.endDate)}{" "}
                      · {calculateDiff(e.startDate, e.endDate)}
                    </span>
                  </Col>
                </Row>
                <Row className="creator-mode">
                  <Col>
                    <span className="experience-p-strong mt-3 mb-2">
                      <b>Skills:</b> TypeScript · Redux.js · React.js · Web
                      Development · Bootstrap · JavaScript
                    </span>
                  </Col>
                </Row>
              </div>
            );
          })}
        </Col>
      </Row>

      <Row>
        <Col className="lp box-style">
          <Row>
            <Col className="box-h1">Education</Col>
            <Col className="box-h1 mb-3 d-flex justify-content-end">
              <i className="bi bi-plus-lg mr-4 pointer"></i>
              <i className="bi bi-pen pointer"></i>
            </Col>
          </Row>
          <Row className="flex-column">
            <Col className="box-h2">
              <img
                src="https://media.licdn.com/dms/image/C4D0BAQEFWO_s8a0FHQ/company-logo_100_100/0/1647618816994?e=1684972800&v=beta&t=TPNYWQvNS5llJxWVNsaOC9JuymAFPxR8tOSYYjqu8Q4"
                alt="company logo"
                className="education-logo"
              />{" "}
              Epicode Global
              <span className="experience-p-strong">
                Full Stack Development, Computer Software Engineering
              </span>
              <span className="experience-p">Nov 2022 - June 2023</span>
            </Col>
          </Row>
          <Row className="border-bottom">
            <Col>
              <span className="experience-p-strong mt-3 mb-2">
                <b>Skills:</b> TypeScript · Redux.js · React.js · Web
                Development · Bootstrap · JavaScript
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
  <PositionModal  handleClose3={handleClose3} show3={show3}/>
      
 <EditModal   handleClose2={handleClose2} show2={show2}/>
    </Container>
  );
};
}
export default LowerProfile;
