import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Navbar } from "react-bootstrap";
// Components
import Sidebar from "../components/Sidebar";

import Template1 from "../assets/img/template1.png";
import Template2 from "../assets/img/template2.png";
import Template3 from "../assets/img/template3.png";
import Template4 from "../assets/img/template4.png";

export default function Template() {
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
                <Navbar.Brand className="fw-bold">Template</Navbar.Brand>
              </Container>
            </Navbar>
            <div className="vh-100 py-5" style={{ background: "#E5E5E5" }}>
              <Link to="/add-link">
                <img src={Template1} alt="" />
              </Link>
              <img src={Template2} alt="" />
              <img src={Template3} alt="" />
              <img src={Template4} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
