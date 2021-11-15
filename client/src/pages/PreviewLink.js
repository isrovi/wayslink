import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API } from "../config/api";

import { Container, Row, Col, Button } from "react-bootstrap";

import LogoBrand from "../assets/img/logo-brand.jpg";
import IconFb from "../assets/img/icon-fb.png";
import IconInsta from "../assets/img/icon-insta.png";
import IconTwit from "../assets/img/icon-twit.png";
import IconYt from "../assets/img/icon-yt.png";
import IconWa from "../assets/img/icon-wa.png";

export default function PreviewLink() {
  const { id } = useParams();
  const [link, setLink] = useState(null);
  let history = useHistory();

  const getLink = async (id) => {
    try {
      const response = await API.get(`/preview-link/${id}`);
      // setLink(response.data.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLink(id);
  }, []);

  return (
    <Container>
      <Row>
        <Col md={3}></Col>
        <Col
          md={6}
          className="pt-4 d-flex flex-column text-center align-items-center justify-content-center"
        >
          <img className="logo-brand" src={LogoBrand} alt="image" />

          <h3>Tsunami</h3>
          <p>
            Add multiple links for your Instagram Bio and optimising your
            Instagram traffic by using InstaBio
          </p>
          <div style={{ width: "530px" }}>
            {link?.links.map((item, index) => (
              <>
                <div className="links-redirect px-3 py-2">
                  <div>
                    <img className="icon-link" src={IconFb} alt="" />
                  </div>
                  <div>
                    <p>{item?.urlLink}</p>
                  </div>
                  <div>&nbsp;</div>
                </div>
                <br />
              </>
            ))}
            {/* <div className="links-redirect px-3 py-2">
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
            </div> */}
          </div>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
}
