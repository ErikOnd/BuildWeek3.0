import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import NavbarComponent from "./components/NavbarComponent";
import MessagingComponent from "./components/MessagingComponent";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        {/* <Route element={<"feed"} path="/" /> */}
        <Route element={<ProfilePage />} path="/profile" />
      </Routes>
      <MessagingComponent />
    </BrowserRouter>
  );
}

export default App;
