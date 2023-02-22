import FooterComponent from "./FooterComponent";
import LowerProfile from "./LowerProfile";
import MainProfile from "./MainProfile";
import RightBar from "./RightBar";
import { Row, Col, Container } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="d-flex justify-content-center">
            <div>
              <MainProfile />
              <LowerProfile />
            </div>
            <div>
              <RightBar />
            </div>
          </Col>
        </Row>
        <FooterComponent />
      </Container>
    </>
  );
};

export default ProfilePage;
