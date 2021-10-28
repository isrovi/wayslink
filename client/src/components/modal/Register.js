import React from "react";

import { Modal, Button, Form } from "react-bootstrap";

function Register(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form className="form-container">
        <h2 className="fw-bold">Register</h2>
        <br />
        <Form.Control type="email" placeholder="Email" />
        <br />
        <Form.Control type="password" placeholder="Password" />
        <br />
        <Form.Control type="text" placeholder="Full Name" />
        <br />
        <Button
          type="submit"
          className="block"
          variant="warning"
          onClick={props.onHide}
        >
          Close
        </Button>
        <br />
        <br />
        <p className="text-center">
          Already have an account ? Klik <b>Here</b>
        </p>
      </Form>
    </Modal>
  );
}

export default Register;
