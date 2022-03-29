import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Modal/Login";

import { Home } from "./components/page/Home";
import SignUp from "./components/Modal/SignUp";
import Reservation from "./components/reservation/Reservation";
import HolydayPicker from "./components/reservation/HolydayPicker";
import PostDetail from "./components/page/PostDetail";
import NewPost from "./components/page/NewPost";
import Post from "./components/page/Post";
import NavBara from "./components/layout/NavBara";
function App() {
  return (
    <BrowserRouter>
      <NavBara/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/HolyDay" element={<HolydayPicker />} />
        <Route path="/post" element={<Post />} />
        <Route path="/write" element={<NewPost />} />
        <Route path="/posts/:pstgSeq" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
