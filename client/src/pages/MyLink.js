import React from "react";

import { Container, Row, Col, Navbar, Button } from "react-bootstrap";
// Components
import Sidebar from "../components/Sidebar";

import IconFind from "../assets/img/icon-find.png";
import LogoFood from "../assets/img/logo-food.png";
import IconView from "../assets/img/icon-view.png";
import IconEdit from "../assets/img/icon-edit.png";
import IconDelete from "../assets/img/icon-delete.png";

export default function MyLink() {
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
                <Navbar.Brand className="fw-bold">My Links</Navbar.Brand>
              </Container>
            </Navbar>
            <div className="vh-100 p-5" style={{ background: "#E5E5E5" }}>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <h5>All Links</h5>
                <div className="icon-links-counter">
                  <p>1</p>
                </div>
                <div className="input-search px-3">
                  <span>
                    <img src={IconFind} alt="icon" />
                  </span>
                  <input
                    style={{
                      border: 0,
                      backgroundColor: "transparent",
                      width: "90%",
                      marginBottom: "10px",
                      marginLeft: "10px",
                    }}
                    type="text"
                    placeholder="Find Your Link"
                  />
                  <hr className="m-0" />
                </div>
                <div>
                  <Button variant="warning">Search</Button>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center mt-5">
                <div className="d-flex flex-row align-items-center justify-content-center">
                  <img src={LogoFood} alt="" />
                  <div className="ms-3">
                    <div className="d-flex flex-column">
                      <h5>WaysFood</h5>
                      <p>localhost:3000/waysfood</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <h5>10</h5>
                  <p>Visit</p>
                </div>
                <div className="d-flex flex-row">
                  <div>
                    <img src={IconView} alt="" />
                  </div>
                  <div className="ms-5">
                    <img src={IconEdit} alt="" />
                  </div>
                  <div className="ms-5">
                    <img src={IconDelete} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
