import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";

import LowerProfile from "./LowerProfile";
import MainProfile from "./MainProfile";
import MessagingComponent from "./MessagingComponent";

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
