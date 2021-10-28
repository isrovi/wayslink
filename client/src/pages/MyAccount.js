import React from "react";

import { Container, Row, Col, Navbar, Button } from "react-bootstrap";
// Components
import Sidebar from "../components/Sidebar";

export default function MyAccount() {
  return (
    <>
      <Container className="p-0" fluid>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <Navbar bg="light" className="nav-height">
              <Container>
                <Navbar.Brand className="fw-bold">My Account</Navbar.Brand>
              </Container>
            </Navbar>
            <div className="vh-100 p-4" style={{ background: "#E5E5E5" }}>
              <h5 className="mt-4">My Information</h5>
              <div className="profile-container mt-5">
                <div className="d-flex flex-column">
                  <label style={{ color: "grey" }} htmlFor="fullName">
                    Name
                  </label>
                  <input
                    className="input-profile"
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Full Name"
                    value="Andi Ganteng"
                  />
                  <hr className="m-0" />
                </div>
                <div className="d-flex flex-column mt-5">
                  <label style={{ color: "grey" }} htmlFor="fullName">
                    Email
                  </label>
                  <input
                    className="input-profile"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value="andigans@gmail.com"
                  />
                  <hr className="m-0" />
                </div>
              </div>
              <div className="d-flex flex-row">
                <Col md={6}></Col>
                <Col className="d-flex flex-row mt-5" md={3}>
                  <div>
                    <Button
                      className="btn-profile fw-bold text-white rounded-lg"
                      variant="warning"
                    >
                      Save Account
                    </Button>
                  </div>
                  <div>
                    <Button
                      className="btn-profile fw-bold text-white ms-4"
                      variant="danger"
                    >
                      Delete Account
                    </Button>
                  </div>
                </Col>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
