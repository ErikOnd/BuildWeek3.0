import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

const ModalComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="secondary"
        onClick={handleShow}
        id="work-button"
        className="d-flex flex-column align-items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          className="d-flex"
          width="24"
          height="24"
          focusable="false"
        >
          <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
        </svg>
        Work
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="right-dialog-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Work</Modal.Title>
        </Modal.Header>
        <Modal.Body id="right-modal-body">
          <p className="ml-4">Visit More LinkedIn Products</p>
          <div className="d-flex flex-wrap p-3">
            <div className="d-flex flex-column align-items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                data-supported-dps="40x40"
                width="40"
                height="40"
                focusable="false"
              >
                <defs>
                  <linearGradient
                    id="app-learning-@1-a"
                    x1="7.18"
                    y1="6.98"
                    x2="13.8"
                    y2="20.22"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#33aada"></stop>
                    <stop offset="1" stopColor="#0091ca"></stop>
                  </linearGradient>
                  <linearGradient
                    id="app-learning-@1-b"
                    x1="12.96"
                    y1="-17.55"
                    x2="27.9"
                    y2="24.33"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#665ed0"></stop>
                    <stop offset="1" stopColor="#0073b1"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M20 30H8a1 1 0 01-1-1V11a1 1 0 011-1h12v20z"
                  fill="url(#app-learning-@1-a)"
                ></path>
                <path
                  d="M20 10h12a1 1 0 011 1v18a1 1 0 01-1 1H20V10z"
                  fill="url(#app-learning-@1-b)"
                ></path>
                <path
                  fill="#33aada"
                  d="M9 19h8v2H9zM9 23h8v2H9zM9 15h8v2H9z"
                ></path>
                <path
                  fill="#006097"
                  d="M23 19h8v2h-8zM23 23h8v2h-8zM23 15h8v2h-8z"
                ></path>
                <path
                  d="M17.41 15.25l7.46 4.52a.27.27 0 010 .46l-7.46 4.52a.27.27 0 01-.41-.23v-9a.27.27 0 01.41-.27z"
                  fill="#fff"
                ></path>
              </svg>
              <span>Learning</span>
            </div>
            <div className="d-flex flex-column align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                data-supported-dps="40x40"
                width="40"
                height="40"
                focusable="false"
              >
                <defs>
                  <linearGradient
                    id="app-talent-insights-medium-a"
                    x1="34.05"
                    y1="44.47"
                    x2="13.67"
                    y2="19.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#665ed0"></stop>
                    <stop offset="1" stopColor="#0073b1"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M25 6H10a1 1 0 00-1 1v25a1 1 0 001 1h20a1 1 0 001-1V12z"
                  fill="#caedff"
                ></path>
                <path fill="#65c3e8" d="M25 6v6h6l-6-6z"></path>
                <path
                  d="M20 19a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v12h6zm8 11v-8h-5v9h4a1 1 0 001-1zm-17-5H9v5a1 1 0 001 1h4z"
                  fill="url(#app-talent-insights-medium-a)"
                ></path>
              </svg>
              <span>Insights</span>
            </div>
            <div className="d-flex flex-column align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                data-supported-dps="40x40"
                width="40"
                height="40"
                focusable="false"
              >
                <defs>
                  <linearGradient
                    id="app-jobs-posting-@1-a"
                    x1="-6.68"
                    y1="-1"
                    x2="25.05"
                    y2="26.36"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#665ed0"></stop>
                    <stop offset="1" stopColor="#0073b1"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="none"
                  stroke="#caedff"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M20 8.67l-4 6.66M20 8.67l4 6.66"
                ></path>
                <rect
                  x="8"
                  y="14"
                  width="24"
                  height="16"
                  rx="1"
                  ry="1"
                  fill="url(#app-jobs-posting-@1-a)"
                ></rect>
                <path fill="#65c3e8" d="M12 18h16v3H12z"></path>
                <path fill="#33aada" d="M15 23h10v3H15z"></path>
                <circle cx="20" cy="9" r="2" fill="#65c3e8"></circle>
              </svg>
              <span>Post a job</span>
            </div>
            <div className="d-flex flex-column align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                data-supported-dps="40x40"
                width="40"
                height="40"
                focusable="false"
              >
                <defs>
                  <linearGradient
                    id="app-ads-@1-a"
                    x1="34.78"
                    y1="3.84"
                    x2="14.66"
                    y2="25.84"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#665ed0"></stop>
                    <stop offset="1" stopColor="#0073b1"></stop>
                  </linearGradient>
                </defs>
                <g fill="url(#app-ads-@1-a)">
                  <path d="M20 11.88A8.13 8.13 0 1111.88 20 8.13 8.13 0 0120 11.88M20 9a11 11 0 1011 11A11 11 0 0020 9z"></path>
                  <circle cx="20" cy="20" r="4"></circle>
                </g>
                <circle
                  cx="20"
                  cy="20"
                  r="2"
                  transform="rotate(-45 20.002 19.995)"
                  fill="#33aada"
                ></circle>
                <path
                  fill="#33aada"
                  d="M24.246 12.932l2.829 2.828-5.657 5.657-2.828-2.829z"
                ></path>
                <path
                  fill="#33aada"
                  d="M29.19 16.46l-4.95-.7-.7-4.95 4.94-4.95L29 11l5.14.52-4.95 4.94z"
                ></path>
              </svg>
              <span>Advertise</span>
            </div>
            <div className="d-flex flex-column align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                data-supported-dps="40x40"
                width="40"
                height="40"
                focusable="false"
              >
                <defs>
                  <linearGradient
                    id="app-sales-navigator-@1-a"
                    x1="40.53"
                    y1="-53.4"
                    x2="20.23"
                    y2="19.17"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#665ed0"></stop>
                    <stop offset="1" stopColor="#0073b1"></stop>
                  </linearGradient>
                </defs>
                <circle
                  cx="20"
                  cy="20"
                  r="14"
                  fill="url(#app-sales-navigator-@1-a)"
                ></circle>
                <path
                  d="M17.17 17.17L27.42 12a.4.4 0 01.18 0 .39.39 0 01.4.39.42.42 0 010 .19l-5.17 10.25z"
                  fill="#fff"
                ></path>
                <path
                  d="M17.17 17.17L12 27.42a.42.42 0 000 .19.39.39 0 00.37.38.45.45 0 00.21 0l10.25-5.12z"
                  fill="#98d8f4"
                ></path>
                <circle cx="20" cy="20" r="4" fill="#fff"></circle>
                <circle cx="20" cy="20" r="2" fill="#0073b1"></circle>
              </svg>
              <span>Sell</span>
            </div>
            <div className="d-flex flex-column align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                data-supported-dps="40x40"
                width="40"
                height="40"
                focusable="false"
              >
                <defs>
                  <linearGradient
                    id="app-groups-@1-b"
                    x1="1.84"
                    y1="-24.59"
                    x2="20.66"
                    y2="25.05"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#665ed0"></stop>
                    <stop offset="1" stopColor="#0073b1"></stop>
                  </linearGradient>
                  <clipPath id="app-groups-@1-a">
                    <path
                      d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                      fill="none"
                    ></path>
                  </clipPath>
                </defs>
                <path
                  d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                  fill="#caedff"
                ></path>
                <circle cx="29" cy="16" r="3" fill="#0091ca"></circle>
                <circle cx="11" cy="16" r="3" fill="#0091ca"></circle>
                <g clipPath="url(#app-groups-@1-a)">
                  <path
                    d="M20 18a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v16h6V20z"
                    fill="url(#app-groups-@1-b)"
                  ></path>
                  <path fill="#0091ca" d="M26 21h6v14h-6zM8 21h6v14H8z"></path>
                </g>
              </svg>
              <span>Groups</span>
            </div>
            <div className="d-flex flex-column align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                data-supported-dps="40x40"
                width="40"
                height="40"
                focusable="false"
              >
                <circle cx="20" cy="12" r="4" fill="#0073b1"></circle>
                <path
                  d="M31.88 13.46L16.17 29.17 18 31a1.37 1.37 0 002 0l14.71-14.71a1.13 1.13 0 00.29-.8.89.89 0 00-.29-.61l-1.41-1.42a1 1 0 00-1.42 0z"
                  fill="#0091ca"
                ></path>
                <path
                  d="M21.83 29.17L20 31a1.35 1.35 0 01-1 .4 1.36 1.36 0 01-1-.4l-8.71-8.71a1 1 0 010-1.41l1.41-1.41a1.07 1.07 0 01.76-.29.94.94 0 01.65.29z"
                  fill="#33aada"
                  opacity=".8"
                ></path>
                <path fill="#0073b1" d="M19 26.34l4-4V18h-6v6.34l2 2z"></path>
              </svg>
              <span>Services Marketplace</span>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer
          id="right-modal-footer"
          className="d-flex flex-column justify-content-start align-items-start ml-4"
        >
          <p className="mb-3">LinkedIn Business Services</p>
          <div>
            <div>
              <p>Talent Solutions</p>
              <span>Find, attract and recruit talent</span>
            </div>
            <div>
              <p>Sales Solutions</p>
              <span>Unlock sales opportunities</span>
            </div>
            <div>
              <p>Post a job for free</p>
              <span>Get your job in front of quality candidates</span>
            </div>
            <div>
              <p>Marketing Solutions</p>
              <span>Acquiere customers and grow your business</span>
            </div>
            <div>
              <p>Learning Solutions</p>
              <span>Develop talent across your organization</span>
            </div>
            <p className="mt-3">Create a Company page +</p>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
