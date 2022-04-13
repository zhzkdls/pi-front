import React, { useState } from "react";
import {
  Nav,
  Navbar,
  Offcanvas,
  Container,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function NavBara() {
  const [InputText, setInputText] = useState("");
  const [Place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText("");
  };
  return (
    <div id="nav">
      <Navbar fixed="top" bg="dark" variant="dark" className="container mx-auto my-3 py-3 rounded-4 shadow" expand={false}>
        <Container fluid>
          <Link to={"/"}>
            <img src="./img/logo5.png" alt="부산광역시 통합예약시스템" id="logo" className="me-3" />
          </Link>
          <div className="d-flex justify-content-center">
            
            <Nav.Link href="#action1">Home</Nav.Link>
            
            <Nav.Link href="#action2">커뮤니티</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </div>
          <Navbar.Toggle className="border-0" aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            backdrop="false"
          >
            <Offcanvas.Header closeButton>
              <Link to={"/"}>
                <img src="./img/logo4.png" alt="부산광역시 통합예약시스템" id="logo" className="me-3" 
                style={{height:"30px"}}/>
              </Link>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className="border-bottom" href="/login">이용안내</Nav.Link>
                <Nav.Link className="border-bottom" href="/post">공지사항</Nav.Link>
                {/* <Nav.Link href="/login">민원게시판</Nav.Link>
                <Nav.Link href="/login">마이페이지</Nav.Link> */}
                {/* <Nav.Link href="/Reservation">예약내역</Nav.Link> */}
                {/* <Nav.Link className="border-bottom" href="/login">이용후기</Nav.Link> */}
                {/* <Nav.Link className="border-bottom" href="/login">회원정보</Nav.Link> */}
                {/* <Nav.Link href="/login">비밀번호변경</Nav.Link>
                <Nav.Link href="/login">회원탈퇴</Nav.Link> */}
                <Nav.Link href="/login">로그인</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBara;
