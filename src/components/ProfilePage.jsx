import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";
import LowerProfile from "./LowerProfile";
import MainProfile from "./MainProfile";
import MessagingComponent from "./MessagingComponent";
import RightBar from "./RightBar";
import { Row, Col } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <>
    <NavbarComponent />
    <Row>
      <Col >
      <MainProfile />
      <LowerProfile />
      </Col>
      <Col  >
      <RightBar/>
      </Col>
      </Row>
      <FooterComponent />
      <MessagingComponent />
    </>
  );
};

export default ProfilePage;
