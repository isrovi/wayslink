import React from "react";

import { Container, Row, Col, Navbar, Button, Form } from "react-bootstrap";
// Components
import Sidebar from "../components/Sidebar";

import Template1 from "../assets/img/template1.png";
import LogoLink from "../assets/img/logo-link.png";

export default function AddLink() {
  return (
    <>
      <Container className="p-0" fluid>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <Navbar bg="light">
              <Container>
                <Navbar.Brand className="fw-bold">Template</Navbar.Brand>
              </Container>
            </Navbar>
            <Row
              className="d-flex vw-100 vh-100 py-5 px-4"
              style={{ background: "#E5E5E5" }}
            >
              <Col md={6}>
                <h5 className="fw-bold">Create Link</h5>
                <div className="link-card bg-white mt-5 p-4">
                  <Form>
                    <div>
                      <img src={LogoLink} alt="" />
                      <label
                        className="btn-upload ms-5 text-center d-inline-block align-items-center justify-content-center"
                        htmlFor="image"
                      >
                        <input type="file" id="image" name="image" hidden />
                        <p>Upload</p>
                      </label>
                    </div>
                    <br />
                    <Form.Group className="mb-3 ">
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        className="input-title"
                        type="text"
                        placeholder="ex. Your Title"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 ">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        className="input-title"
                        type="text"
                        placeholder="ex. Description Here"
                      />
                    </Form.Group>
                  </Form>
                  <div className="link-container d-flex flex-row p-3">
                    <img
                      style={{ width: "124px", height: "94px" }}
                      src={LogoLink}
                      alt=""
                    />
                    <div className="ps-3 vw-100">
                      <p>Title Link</p>
                      <h5>Facebook</h5>
                      <hr className="mt-0" />

                      <p>Link</p>
                      <h5>https://facebook.com/dumbfood</h5>
                      <hr className="mt-0" />
                    </div>
                  </div>
                  <br />
                  <div className="link-container d-flex flex-row p-3">
                    <img
                      style={{ width: "124px", height: "94px" }}
                      src={LogoLink}
                      alt=""
                    />
                    <div className="ps-3 vw-100">
                      <p>Title Link</p>
                      <h5>Twitter</h5>
                      <hr className="mt-0" />

                      <p>Link</p>
                      <h5>https://twitter.com/dumbfood</h5>
                      <hr className="mt-0" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="mb-5 d-flex align-items-end justify-content-end">
                  <Button
                    style={{ borderRadius: "10px", color: "white" }}
                    variant="warning"
                  >
                    Publish Link
                  </Button>
                </div>
                <img className="mt-5" src={Template1} alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
