import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";
import LowerProfile from "./LowerProfile";
import MainProfile from "./MainProfile";
import RightBar from "./RightBar";

const ProfilePage = () => {
  return (
    <>
      <NavbarComponent />
      <MainProfile />
      <RightBar />
      <LowerProfile />
      <FooterComponent />
    </>
  );
};

export default ProfilePage;
