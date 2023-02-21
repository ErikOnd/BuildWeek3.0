import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";
import LowerProfile from "./LowerProfile";
import MainProfile from "./MainProfile";
import MessagingComponent from "./MessagingComponent";
import RightBar from "./RightBar";

const ProfilePage = () => {
  return (
    <>
      <NavbarComponent />
      <MainProfile />
      {/* <RightBar /> */}
      <LowerProfile />
      <FooterComponent />
      <MessagingComponent />
    </>
  );
};

export default ProfilePage;
