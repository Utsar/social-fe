import Home from "./pages/homePage/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profilePage/Profile";
import Register from "./pages/register/Register";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profile/:username" element={<Profile />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
