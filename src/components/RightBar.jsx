import React, { useState } from "react";
import "../App.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useEffect } from "react";
import {useSelector, useDispatch } from "react-redux";
import {fetchUsersDataAsync  } from "../Redux/actions";



const RightBar = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchUsersDataAsync ());
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const users = useSelector((state) => state.user.user);
  let [name, setName] = useState(users.name);
  let [surname, setSurname] = useState(users.surname);
  let [title, setTitle] = useState(users.title);



  return (
    <div className="main-sidebar">
  <Container className="my-5">
  <Row>
    <Col className="col-12 col-sm-4 px-4 profiles-container">
      <div className="sidebar-card">
        <div className="card-spacing">
          <div className="d-flex align-items-center">
            <h2 >Edit public profile & URL</h2>
            <svg
              className="ml-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z"></path>
            </svg>
          </div>
          <hr />
          <div className="d-flex align-items-center">
            <h2 >Add profile in another language</h2>
            <svg
              className="ml-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="sidebar-card my-2">
        <div className="card-spacing">
          <h2>People also viewed</h2>
          <div className="d-flex">
            <div>
              <h2 className="user" >
              {users.name} {users.surname}
              </h2>
              <p className="profession"> {users.title}</p>
              <Button variant="outline-secondary">
                <svg
                  className="mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                </svg>
                Connect
              </Button>
            </div>
          </div>
          <hr />
          <div className="d-flex">
            
            <div>
              <h2 className="user" >
              {users.name} {users.surname}
              </h2>
              <p className="profession"> {users.title}</p>
              <Button variant="outline-secondary">
                <svg
                  className="mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                </svg>
                Connect
              </Button>
            </div>
          </div>
          <hr />
          <div className="d-flex">
           
            <div>
              <h2 className="user" >
              {users.name} {users.surname}
              </h2>
              <p className="profession">{users.title}</p>
              <Button variant="outline-secondary">
                <svg
                  className="mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                </svg>
                Connect
              </Button>
            </div>
          </div>
        </div>
        <div className="toggle">
          Show more{" "}
          <svg
            className="ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
          </svg>
        </div>
      </div>
      <div className="sidebar-card my-2">
        <div className="card-spacing">
          <h2>People you may know</h2>
          <div className="d-flex">
            
            <div>
              <h2 className="user" to={"/"}>
                Name 
              </h2>
              <p className="profession">Employment</p>
              <Button variant="outline-secondary">
                <svg
                  className="mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                </svg>{" "}
                Connect
              </Button>
            </div>
          </div>
          <hr />
          <div className="d-flex">
           
            <div>
              <h2 className="user">
                Name 
              </h2>
              <p className="profession">Employment</p>
              <Button variant="outline-secondary">
                <svg
                  className="mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                </svg>
                Connect
              </Button>
            </div>
          </div>
          <hr />
          <div className="d-flex">
            <div>
              <h2 className="user">
                Name 
              </h2>
              <p className="profession">Employment</p>
              <Button variant="outline-secondary">
                <svg
                  className="mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                </svg>{" "}
                Connect
              </Button>
            </div>
          </div>
          <hr />
          <div className= "d-flex d-none">
            <div>
              <h2 className="user" >
                Name 
              </h2>
              <p className="profession">Employment</p>
              <Button variant="outline-secondary">
                <svg
                  className="mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                </svg>
                Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Col>
  </Row>
</Container>
</div>
);
};
export default RightBar;
