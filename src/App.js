import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import MessagingComponent from "./components/MessagingComponent";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        {/* <Route element={<"feed"} path="/" /> */}
        <Route element={<ProfilePage />} path="/profile" />
      </Routes>
      <FooterComponent />
      <MessagingComponent />
    </BrowserRouter>
  );
}

export default App;
