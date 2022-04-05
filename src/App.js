import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Modal/Login";

import { Home } from "./components/page/Home";
import SignUp from "./components/Modal/SignUp";
import Reservation from "./components/reservation/Reservation";
import HolydayPicker from "./components/holyday/HolydayPicker";
import PostDetail from "./components/page/PostDetail";
import NewPost from "./components/page/NewPost";
import Post from "./components/page/Post";
import NavBara from "./components/layout/NavBara";
import FacitList from "./components/facit/FacitList";
import FacitDetail from "./components/facit/FacitDetail";
import ReservationListByFcSeq from "./components/reservation/ReservationListByFcSeq";



function App() {
  return (
    <BrowserRouter>
      <NavBara/>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/login" element={<Login />} />
        <Route path ="/SignUp" element={<SignUp />} />
        <Route path ="/HolyDay" element={<HolydayPicker />} />
        <Route path ="/post" element={<Post />} />
        <Route path ="/write" element={<NewPost />} />
        <Route path ="/posts/:pstgSeq" element={<PostDetail />} />
        <Route path ="/reservation/:fcSeq" element={<Reservation />} />
        <Route path ="/facitlist" element={<FacitList />} />
        <Route path ="/facit/:fcSeq" element={<FacitDetail />} />
        <Route path ="/reservationList/:fcSeq" element={<ReservationListByFcSeq />} />

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
