import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Modal/Login";

import { Home } from "./components/page/Home";
import SignUp from "./components/Modal/SignUp";
import Reservation from "./components/reservation/Reservation";
import HolydayPicker from "./components/reservation/HolydayPicker";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/HolyDay" element={<HolydayPicker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
