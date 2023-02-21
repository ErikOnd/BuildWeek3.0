import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";

import LowerProfile from "./LowerProfile";
import MainProfile from "./MainProfile";
import MessagingComponent from "./MessagingComponent";

import { Col } from "react-bootstrap";
import RightBar from "./RightBar";

const ProfilePage = () => {
  return (
    <>
      <NavbarComponent />
      <MainProfile />
      <LowerProfile />
      <FooterComponent />
      <MessagingComponent />
    </>
  );
};

export default ProfilePage;
