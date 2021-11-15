import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { API } from "../config/api";
import { UserContext } from "../context/userContext";

import { Container, Row, Col, Navbar, Button } from "react-bootstrap";
// Components
import Sidebar from "../components/Sidebar";

export default function MyAccount() {
  let history = useHistory();
  const [state] = useContext(UserContext);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
  });

  const getUser = async (id) => {
    try {
      const response = await API.get("/user/" + id);

      setForm({
        ...form,
        fullName: response.data.data.user.fullName,
        email: response.data.data.user.email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = async (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const formData = {
        fullName: form.fullName,
        email: form.email,
      };

      const response = await API.patch(
        "/user/" + state.user.id,
        formData,
        config
      );
      history.push("/template");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (e) => {
    try {
      const response = await API.delete("/user/" + state.user.id);
      localStorage.removeItem("token");
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser(state.user.id);
  }, []);

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
              <form>
                <div className="profile-container mt-5">
                  <div className="d-flex flex-column">
                    <label style={{ color: "grey" }} htmlFor="fullName">
                      Name
                    </label>
                    <input
                      className="input-profile"
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={form.fullName}
                      onChange={handleChange}
                    />
                    <hr className="m-0" />
                  </div>
                  <div className="d-flex flex-column mt-5">
                    <label style={{ color: "grey" }} htmlFor="fullName">
                      Email
                    </label>
                    <input
                      className="input-profile"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
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
                        onClick={handleSubmit}
                      >
                        Save Account
                      </Button>
                    </div>
                    <div>
                      <Button
                        className="btn-profile fw-bold text-white ms-4"
                        variant="danger"
                        onClick={handleDelete}
                      >
                        Delete Account
                      </Button>
                    </div>
                  </Col>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
