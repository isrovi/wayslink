import React from "react";

import { Modal, Button, Form } from "react-bootstrap";

function Login(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form className="form-container">
        <h2 className="fw-bold">Login</h2>
        <br />
        <Form.Control type="email" placeholder="Email" />
        <br />
        <Form.Control type="password" placeholder="Password" />
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
          Don't have an account ? Klik <b>Here</b>
        </p>
      </Form>
    </Modal>
  );
}

export default Login;
