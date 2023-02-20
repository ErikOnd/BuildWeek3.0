import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProfilePage />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
