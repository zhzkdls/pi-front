import React from "react";
import {
  Button,
  FormControl,
  Nav,
  Navbar,
  Offcanvas,
  Container,
  NavDropdown,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import "../../App.css";
function NavBar() {
  return (
    <div id="nav">
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Link to={"/"}>
            <img src="./img/로고.jpg" alt="Xbox Logo" id="logo" />
            <span id="logoText">GO HOME</span>
          </Link>
          <Nav.Link href="#deets"></Nav.Link>
          <Nav.Link href="#deets"></Nav.Link>
          <Nav.Link href="#deets"></Nav.Link>
          <Nav.Link href="#deets"></Nav.Link>
          <Nav.Link href="#deets"></Nav.Link>
          <Nav.Link href="#deets"></Nav.Link>
          <Nav.Link href="#deets"></Nav.Link>
          <Nav.Link href="#deets"></Nav.Link>
          <Nav.Link href="#deets"></Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>

          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">메뉴</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/login">이용안내</Nav.Link>
                <Nav.Link href="/post">공지사항</Nav.Link>
                <Nav.Link href="/board">민원게시판</Nav.Link>
                <Nav.Link href="/login">마이페이지</Nav.Link>
                <Nav.Link href="/Reservation">예약내역</Nav.Link>
                <Nav.Link href="/login">이용후기</Nav.Link>
                <Nav.Link href="/login">회원정보변경</Nav.Link>
                <Nav.Link href="/login">비밀번호변경</Nav.Link>
                <Nav.Link href="/login">회원탈퇴</Nav.Link>
                <Nav.Link href="/login">카카오톡 로그인</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
