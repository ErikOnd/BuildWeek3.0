import { Container, Row, Col,Button, Badge,  Modal, Form} from "react-bootstrap";
import React, { useState } from "react";

const LowerProfile = () => {

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
            <span className="lp-bottom-text">Show all 5 resources</span>
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
              <span className="start-post">Start a post</span>
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
            <span className="lp-bottom-text">Show all activity</span>
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
        <div className="mr-2">
          
        </div>
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
                  onChange={(e) => onChangeHandler(e.target.value, "startYear")}
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
                  onChange={(e) => onChangeHandler(e.target.value, "endYear")}
                ></Form.Control>
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={experience.description}
                onChange={(e) => onChangeHandler(e.target.value, "description")}
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
              <i className="bi bi-pen"></i>
            </Col>
          </Row>
          <Row className="flex-column">
            <Col className="box-h2">
              <img
                src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                alt="company logo"
                className="experience-logo"
              />{" "}
              Software Engineer
              <span className="experience-p-strong">
                Test Company AG • Full-time
              </span>
              <span className="experience-p">
                Jul 2021 - Oct 2022 · 1 yr 4 mos
              </span>
            </Col>
          </Row>
          <Row>
            <Col>
              <span className="experience-p-strong mt-3">
                <b>Skills:</b> TypeScript · Redux.js · React.js · Web
                Development · Bootstrap · JavaScript
              </span>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col className="lp box-style">
          <Row>
            <Col className="box-h1">Education</Col>
            <Col className="box-h1 mb-3 d-flex justify-content-end">
              <i className="bi bi-plus-lg mr-4"></i>
              <i className="bi bi-pen"></i>
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
          <Row className="flex-column mt-2">
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
          <Row className="flex-column mt-2">
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
    </Container>
  );
};

export default LowerProfile;
