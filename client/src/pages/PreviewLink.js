import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import LogoBrand from "../assets/img/logo-brand.jpg";
import IconFb from "../assets/img/icon-fb.png";
import IconInsta from "../assets/img/icon-insta.png";
import IconTwit from "../assets/img/icon-twit.png";
import IconYt from "../assets/img/icon-yt.png";
import IconWa from "../assets/img/icon-wa.png";

export default function PreviewLink() {
  return (
    <Container>
      <Row>
        <Col md={3}></Col>
        <Col
          md={6}
          className="pt-4 d-flex flex-column text-center align-items-center justify-content-center"
        >
          <img className="logo-brand" src={LogoBrand} alt="" />
          <h3>Your Brand Name</h3>
          <p>
            Add multiple links for your Instagram Bio and optimising your
            Instagram traffic by using InstaBio
          </p>
          <div style={{ width: "530px" }}>
            <div className="links-redirect px-3 py-2">
              <div>
                <img className="icon-link" src={IconFb} alt="" />
              </div>
              <div>
                <p>Facebook</p>
              </div>
              <div>&nbsp;</div>
            </div>
            <br />
            <div className="links-redirect px-3 py-2">
              <div>
                <img className="icon-link" src={IconInsta} alt="" />
              </div>
              <div>
                <p>Instagram</p>
              </div>
              <div>&nbsp;</div>
            </div>
            <br />
            <div className="links-redirect px-3 py-2">
              <div>
                <img className="icon-link" src={IconTwit} alt="" />
              </div>
              <div>
                <p>Twitter</p>
              </div>
              <div>&nbsp;</div>
            </div>
            <br />
            <div className="links-redirect px-3 py-2">
              <div>
                <img className="icon-link" src={IconYt} alt="" />
              </div>
              <div>
                <p>Youtube</p>
              </div>
              <div>&nbsp;</div>
            </div>
            <br />
            <div className="links-redirect px-3 py-2">
              <div>
                <img className="icon-link" src={IconWa} alt="" />
              </div>
              <div>
                <p>WhatsApp</p>
              </div>
              <div>&nbsp;</div>
            </div>
          </div>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
}
