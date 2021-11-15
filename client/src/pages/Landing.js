import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/userContext";
// Bootstrap Components
import { Container, Navbar, Nav, Row, Col, Button } from "react-bootstrap";
// Logo Image
import Logo from "../assets/img/logo.svg";
import LogoPhone from "../assets/img/logo-phone.png";
import LogoDesktop from "../assets/img/logo-desktop.png";
// Components
import ModalLogin from "../components/modal/ModalLogin";
import ModalRegister from "../components/modal/ModalRegister";

export default function Landing() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const switchLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const switchRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  return (
    <>
      <Navbar variant="light">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Nav>
            <Button
              className="me-4"
              variant="light"
              onClick={() => setShowLogin(true)}
            >
              Login
            </Button>
            <Button variant="warning" onClick={() => setShowRegister(true)}>
              Register
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <ModalLogin
        show={showLogin}
        onHide={() => setShowLogin(false)}
        switchRegister={switchRegister}
      />
      <ModalRegister
        show={showRegister}
        onHide={() => setShowRegister(false)}
        switchLogin={switchLogin}
      />
      <Container className="bg" fluid>
        <Row className="p-5">
          <Col md={6} className="mt-5">
            <h1 className="text-white" style={{ fontSize: "72px" }}>
              The Only Link You'll Ever Need
            </h1>
            <br />
            <p className="pe-4 text-white fw-" style={{ fontSize: "24px" }}>
              Add a link for your Social Bio and optimize your social media
              traffic.
            </p>
            <br />
            <p className="text-white" style={{ fontSize: "24px" }}>
              safe, fast and easy to use
            </p>
            <br />
            <br />
            <Button
              className="px-4 py-2"
              style={{
                fontSize: "24px",
                borderRadius: "10px",
                background: "black",
              }}
              variant="dark"
              onClick={() => setShowRegister(true)}
            >
              Get Started For Free
            </Button>
          </Col>
          <Col md={6} className="mt-5">
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
