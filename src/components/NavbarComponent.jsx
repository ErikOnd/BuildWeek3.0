import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalComponent from "./ModalComponent";

const NavbarComponent = () => {
  return (
    <div className="fixed-top pl-0">
      <Navbar
        bg="light"
        expand="lg"
        id="Navbar"
        className="d-flex justify-content-center"
      >
        <div className="d-flex">
          <Navbar.Brand href="#home">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="Linkedin logo"
            />
          </Navbar.Brand>
          <Form inline className="pl-2 border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 border-0"
              id="search-bar"
            />
          </Form>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="">
            <Nav.Link
              href="#home"
              className="d-flex flex-column align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
              </svg>
              Home
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="d-flex flex-column align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
              </svg>
              My Network
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="d-flex flex-column align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
              </svg>
              Jobs
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="d-flex flex-column align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
              </svg>
              Messaging
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="d-flex flex-column align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
              </svg>
              Notifications
            </Nav.Link>
            <DropdownButton
              variant="secondary"
              title={
                <div className="d-flex flex-column pl-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                  <p className="mb-0">Me</p>
                </div>
              }
              id="basic-nav-dropdown"
              menuAlign="right"
            >
              <Link to={"/profile"}>
                <Dropdown.Item href="#action/3.1" className="px-2">
                  <div>
                    <div className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        fill="currentColor"
                        className="bi bi-person-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        />
                      </svg>

                      <div className="pl-2 my-2 mx-0" id="dropdown-user">
                        <p className="mb-0">Name Surname</p>
                        <span>Current job example</span>
                      </div>
                    </div>
                    <div id="view-profile-button">View Profile</div>
                  </div>
                  <Dropdown.Divider />
                </Dropdown.Item>
              </Link>
              <p className="ml-2 mb-0 dropdown-section">Account</p>
              <Dropdown.Item href="#action/3.2">
                Try Premium for free
              </Dropdown.Item>
              <Dropdown.Item href="#action/3.2">
                Settings & Privacy
              </Dropdown.Item>
              <Dropdown.Item href="#action/3.2">Help</Dropdown.Item>
              <Dropdown.Item href="#action/3.2">Language</Dropdown.Item>
              <Dropdown.Divider />
              <p className="pl-2 mb-0 dropdown-section">Manage</p>
              <Dropdown.Item href="#action/3.3">Posts & activity</Dropdown.Item>
              <Dropdown.Item href="#action/3.3">
                Job Posting Account
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#action/3.4">Sing out</Dropdown.Item>
            </DropdownButton>
            <ModalComponent />
            <Nav.Link
              href="#link"
              className="text-center"
              id="premium"
              style={{ width: "110px" }}
            >
              Try Premium for free
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar bg="light" expand="lg" id="hidden-navbar" className="">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <div
                className="d-flex align-items-center"
                id="hidden-navbar-user"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
                <div className="ml-2">
                  <p className="mb-0">Name + Surname</p>
                  <span className="">Current job</span>
                </div>
              </div>
            </Nav.Link>
          </Nav>
          <Form inline>
            <div id="more-button" className="mx-1 p-1 px-3">
              More
            </div>
            <div id="addprofile-button" className="mx-1 p-1 px-3">
              Add profile section
            </div>
            <div id="opento-button" className="mx-1 p-1 px-3">
              Open to
            </div>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
