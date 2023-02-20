import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";

import LowerProfile from "./LowerProfile";
import MainProfile from "./MainProfile";

const ProfilePage = () => {
  return (
    <>
      <NavbarComponent />
      <MainProfile />
      <LowerProfile />
      <FooterComponent />
    </>
  );
};

export default ProfilePage;
