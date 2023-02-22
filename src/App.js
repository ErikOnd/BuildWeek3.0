import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import NavbarComponent from "./components/NavbarComponent";
import MessagingComponent from "./components/MessagingComponent";
import FeedPostComponent from "./components/FeedPostComponent";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route element={<FeedPostComponent />} path="/" />
        <Route element={<ProfilePage />} path="/profile" />
      </Routes>
      <MessagingComponent />
    </BrowserRouter>
  );
}

export default App;
