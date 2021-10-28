import React, { useState } from "react";
// Bootstrap Components
import { Container, Navbar, Nav, Row, Col, Button } from "react-bootstrap";
// Logo Image
import Logo from "../assets/img/logo.svg";
import LogoPhone from "../assets/img/logo-phone.png";
import LogoDesktop from "../assets/img/logo-desktop.png";
// Components
import Login from "../components/modal/Login";
import Register from "../components/modal/Register";

export default function Landing() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Nav>
            <Button variant="light" onClick={() => setShowLogin(true)}>
              Login
            </Button>
            <Button variant="warning" onClick={() => setShowRegister(true)}>
              Register
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <Login show={showLogin} onHide={() => setShowLogin(false)} />
      <Register show={showRegister} onHide={() => setShowRegister(false)} />
      <Container className="bg" fluid>
        <Row>
          <Col md={6}>
            <h1>The Only Link You'll Ever Need</h1>
            <h2>
              Add a link for your Social Bio and optimize your social media
              traffic.
            </h2>
            <h2>safe, fast and easy to use</h2>
            <Button variant="dark" onClick={() => setShowRegister(true)}>
              Get Started For Free
            </Button>
          </Col>
          <Col md={6}>
            <div className="image-stack">
              <div className="image-stack__item--bottom image-stack__display">
                <img src={LogoDesktop} alt="Logo" />
              </div>
              <div className="image-stack__item--top image-stack__display">
                <img src={LogoPhone} alt="Logo" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
