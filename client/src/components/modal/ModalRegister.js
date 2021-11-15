import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useHistory } from "react-router-dom";
import { API } from "../../config/api";

import { Modal, Button, Form } from "react-bootstrap";

function ModalRegister(props) {
  let history = useHistory();

  const [state, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const { email, password, fullName } = form;

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

      const response = await API.post("/register", body, config);

      if (response?.status == 200) {
        dispatch({
          type: "REGISTER_SUCCESS",
          payload: response.data.data,
        });
        history.push("/template");
      }
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
        <h2 className="fw-bold">Register</h2>
        <br />
        <Form.Control
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br />
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br />
        <Form.Control
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
        />
        <br />
        <Button type="submit" className="block" variant="warning">
          Register
        </Button>
        <br />
        <br />
        <p className="text-center">
          Already have an account ? Klik <b onClick={props.switchLogin}>Here</b>
        </p>
      </Form>
    </Modal>
  );
}

export default ModalRegister;
