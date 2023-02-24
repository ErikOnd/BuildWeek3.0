import { Navbar, Nav, Form, Container } from "react-bootstrap";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataAsync } from "../Redux/actions";
import React, { useState } from "react";

// function scrollFunction() {
//   if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
//     document.getElementById("hidden-navbar").style.top = "75px";
//   } else {
//     document.getElementById("hidden-navbar").style.top = "-200px";
//   }
// }

// window.onscroll = function () {
//   scrollFunction();
// };

const HiddenNavbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const user = useSelector((state) => state.user.user);
  let [name, setName] = useState(user.name);
  let [surname, setSurname] = useState(user.surname);
  let [title, setTitle] = useState(user.title);

  return (
    <Navbar bg="light" expand="lg" id="hidden-navbar">
      <Container>
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
                  <p className="mb-0">
                    {user.name} {user.surname}
                  </p>
                  <span className=""> {user.title}</span>
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
      </Container>
    </Navbar>
  );
};

export default HiddenNavbar;
