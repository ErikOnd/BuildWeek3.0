import { useEffect } from "react";
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
import { getAllExperienceAsync } from "../Redux/actions";
import React, { useState } from "react";

import { MDBCheckbox } from "mdb-react-ui-kit";
const LowerProfile = () => {
  const experienceData = useSelector((state) => state.experience.list);
  const dispatch = useDispatch();

  const [experienceInfo, setExperienceInfo] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

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

  useEffect(() => {
    addEnd();
  }, [endYear, endMonth]);

  useEffect(() => {
    addStart();
  }, [startYear, startMonth]);

  console.log(experienceInfo);

  useEffect(() => {
    dispatch(getAllExperienceAsync());
  }, []);
  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  // --------------------

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
    } else {
      setWorking(true);
    }
  };

  // ---------------------

  const [show, setShow] = useState(false);

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
  const handleShow = () => setShow(true);

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

    console.log("new experience", newExperience);

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
              <i className="bi bi-plus-lg mr-4" onClick={handleShow}></i>
              <div
                className="d-flex mb-1 add-position-experience-effect-on-hover"
                onClick={handleShow}
              >
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
                        value={experience.type}
                        onChange={(e) => {
                          onChangeHandler(e.target.value, "role");
                        }}
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Location*</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ex. London, United Kingdom"
                        required
                        value={experience.area}
                        onChange={(e) => {
                          onChangeHandler(e.target.value, "area");
                        }}
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
                          value={experience.startMonth}
                          onChange={(e) =>
                            onChangeHandler(e.target.value, "startMonth")
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
                          value={experience.startYear}
                          onChange={(e) =>
                            onChangeHandler(e.target.value, "startYear")
                          }
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
                          value={experience.endMonth}
                          onChange={(e) => {
                            onChangeHandler(e.target.value, "endMonth");
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
                          disabled={disabledInput}
                          value={experience.endYear}
                          onChange={(e) =>
                            onChangeHandler(e.target.value, "endYear")
                          }
                        ></Form.Control>
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={experience.description}
                        onChange={(e) =>
                          onChangeHandler(e.target.value, "description")
                        }
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="primary"
                    className="saveButtonExperiencesModal"
                    onClick={onSubmitHandler}
                  >
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>
              <i
                onClick={() => {
                  handleShow3();
                }}
                className="bi bi-pen"
              ></i>
            </Col>
          </Row>
          {experienceData.map((e) => {
            return (
              <div className="experience-holder" key={e._id}>
                <Row className="flex-column">
                  <Col className="box-h2">
                    <img
                      src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                      alt="company logo"
                      className="experience-logo"
                    />
                    {e.role}

                    <span className="experience-p-strong">{e.company}</span>
                    <span className="experience-p">
                      Jul 2021 - Oct 2022 · 1 yr 4 mos
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
      <Modal
        show={show3}
        onHide={handleClose3}
        dialogClassName="positionModal d-flex"
        contentClassName="modal-height"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="notify">
            Notify network Turn on to notify your network of key profile changes
            (such as new job) and work anniversaries. Updates can take up to 2
            hours. Learn more about sharing profile changes.
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                onClick={() => ons()}
              />
            </Form>
            {on ? (
              <div>
                {" "}
                <p>On</p>
              </div>
            ) : (
              <div>
                {" "}
                <p>Off</p>
              </div>
            )}
          </div>
          <br />
          <small>*indicates Required</small>
          <br /> <br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Title*</Form.Label>
            <Form.Control
              value={experienceInfo.role}
              onChange={(i) =>
                setExperienceInfo({ ...experienceInfo, role: i.target.value })
              }
              type="text"
              required
              placeholder="Ex:Retail Sales Manager"
            />
            <br />
            <Form.Label>Employment type</Form.Label>
            <Form.Control as={"select"} required>
              <option>Please Select</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Self-Employed</option>
              <option>Freelance</option>
              <option>Contract</option>
              <option>Internship</option>
              <option>Apprenticeship</option>
              <option>Temporary</option>
            </Form.Control>
            Learn More About <a href="">employment types</a>.
            <br />
            <br />
            <Form.Label>Company Name*</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Ex:Microsoft"
              value={experienceInfo.company}
              onChange={(i) =>
                setExperienceInfo({
                  ...experienceInfo,
                  company: i.target.value,
                })
              }
            />
            <br />
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex:London United Kingdom"
              value={experienceInfo.area}
              onChange={(i) =>
                setExperienceInfo({
                  ...experienceInfo,
                  area: i.target.value,
                })
              }
            />
            <br />
            <Form.Label>Location type</Form.Label>
            <Form.Control as={"select"} required>
              <option>Please Select</option>
              <option>On-Site</option>
              <option>Hybrid</option>
              <option>Remote</option>
            </Form.Control>
            Pick a location type ex:remote
            <br />
            <br />
            {working ? (
              <>
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckChecked"
                  label="I am currently working on this role"
                  onClick={() => work()}
                />
                <br />
                <Form.Label>Start Date*</Form.Label>
                <Form.Control
                  as={"select"}
                  required
                  value={experienceInfo.startDate}
                  onChange={(i) => {
                    setStartMonth(() => i.target.value);
                  }}
                >
                  <option>Month</option>
                  <option>January</option>
                  <option>Febraury</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>Septembet</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                  <option>March</option>
                </Form.Control>
                <Form.Control
                  as={"select"}
                  required
                  value={experienceInfo.startDate}
                  onChange={(i) => {
                    setStartYear(() => i.target.value);
                  }}
                >
                  <option>Year</option>
                  {years.map((y) => {
                    return (
                      <>
                        <option key={y}>{y}</option>
                      </>
                    );
                  })}
                </Form.Control>
                <br />
                <Form.Label>End Date*</Form.Label>
                <Form.Control as={"select"} disabled>
                  <option>Month</option>
                  <option>January</option>
                  <option>Febraury</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>Septembet</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                  <option>March</option>
                </Form.Control>
                <Form.Control as={"select"} disabled>
                  <option>Year</option>
                  {years.map((y) => {
                    return (
                      <>
                        <option key={y}>{y}</option>
                      </>
                    );
                  })}
                </Form.Control>
                <br />
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckChecked"
                  label="End current position as of now"
                />
                <Form.Label>Industry*</Form.Label>
                <Form.Control type="text" required placeholder="Ex:Retail" />
                LinkedIn uses industry information to provide more relevant
                recommendations
                <p>
                  Learn more about <a href="">industry options</a>
                </p>
                <Form.Label>Description</Form.Label>
                <br />
                <br />
                <textarea
                  name="description"
                  id="description"
                  cols="85"
                  rows="3"
                  onChange={(e) => setCount(e.target.value.length)}
                ></textarea>
                <p className="texarea-text"> {count}/2000 </p> <br />
                <br />
              </>
            ) : (
              <>
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckChecked"
                  label="I am currently working on this role"
                  onClick={() => work()}
                />
                <br />
                <Form.Label>Start Date*</Form.Label>
                <Form.Control
                  as={"select"}
                  value={experienceInfo.startDate}
                  onChange={(i) =>
                    setExperienceInfo({
                      ...experienceInfo,
                      startDate: i.target.value,
                    })
                  }
                  required
                >
                  <option>Month</option>
                  <option>January</option>
                  <option>Febraury</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>Septembet</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                  <option>March</option>
                </Form.Control>
                <Form.Control
                  as={"select"}
                  value={experienceInfo.startDate}
                  onChange={(i) =>
                    setExperienceInfo({
                      ...experienceInfo,
                      startDate: i.target.value,
                    })
                  }
                  required
                >
                  <option>Year</option>
                  {years.map((y) => {
                    return (
                      <>
                        <option key={y}>{y}</option>
                      </>
                    );
                  })}
                </Form.Control>
                <br />
                <Form.Label>End Date*</Form.Label>
                <Form.Control
                  as={"select"}
                  value={experienceInfo.endDate}
                  onChange={(i) => {
                    setEndMonth(() => i.target.value);
                  }}
                  required
                >
                  <option>Month</option>
                  <option>January</option>
                  <option>Febraury</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>Septembet</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                  <option>March</option>
                </Form.Control>
                <Form.Control
                  as={"select"}
                  value={experienceInfo.endDate}
                  onChange={(i) => {
                    setEndYear(() => i.target.value);
                  }}
                  required
                >
                  {years.map((y) => {
                    return (
                      <>
                        <option key={y}>{y}</option>
                      </>
                    );
                  })}
                </Form.Control>
                <br />
                <Form.Label>Description</Form.Label> <br />
                <br />
                <textarea
                  name="description"
                  id="description"
                  cols="85"
                  rows="3"
                  maxLength={2000}
                  value={experienceInfo.description}
                  onChange={(i) =>
                    setExperienceInfo({
                      ...experienceInfo,
                      description: i.target.value,
                    })
                  }
                ></textarea>
                <p className="texarea-text"> {count}/2000 </p>
                <br />
                <br />
              </>
            )}
            <Form.Label>Profile Headline</Form.Label>
            <Form.Control type="text" value={title} />
            Appears below your name at the top of the profile
            <br />
            <br />
            <h3>Skills</h3>
            We recommend adding your top 5 used in this role. They’ll also
            appear in your Skills section.
            <br />
            {skill ? (
              <button onClick={() => setSkill(true)} className="button second">
                Add Skill
              </button>
            ) : (
              <Form.Control type="text" />
            )}
            <h3>Media</h3>
            Add or link to external documents, photos, sites, videos, and
            presentations. Learn more about{" "}
            <a href=""> media file types supported</a>
            <br /> <br />
            <button className="button" onClick={() => setmed()}>
              Add Media
            </button>
            {media ? (
              <div>
                <p>Add a link</p>
                <p>Upload media</p>
              </div>
            ) : (
              ""
            )}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button className="first button" onClick={handleClose3}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default LowerProfile;
