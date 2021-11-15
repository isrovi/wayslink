import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { Modal, Button, Form, Alert } from "react-bootstrap";

import { API, setAuthToken } from "../../config/api";

import { UserContext } from "../../context/userContext";

function ModalLogin(props) {
  let history = useHistory();

  const [state, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
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

      const body = JSON.stringify(form);

      const response = await API.post("/login", body, config);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data.data.user,
      });

      setAuthToken(response.data.data.user.token);

      history.push("/template");

      const alert = (
        <Alert variant="success" className="py-1">
          Login success
        </Alert>
      );
      setMessage(alert);
    } catch (error) {
      const alert = "Failed";
      setMessage(alert);
      console.log(error);
    }
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form className="form-container" onSubmit={handleSubmit}>
        <h2 className="fw-bold">Login</h2>
        <br />
        <Form.Control
          onChange={handleChange}
          type="email"
          placeholder="Email"
          name="email"
        />
        <br />
        <Form.Control
          onChange={handleChange}
          type="password"
          placeholder="Password"
          name="password"
        />
        <br />
        <Button className="block" variant="warning" type="submit">
          Login
        </Button>
        <br />
        <br />
        <p className="text-center">
          Don't have an account ? Klik{" "}
          <b onClick={props.switchRegister}>Here</b>
        </p>
      </Form>
    </Modal>
  );
}

export default ModalLogin;
