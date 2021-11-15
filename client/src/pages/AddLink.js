import React, { useState, useEffect } from "react";
import { API } from "../config/api";

import { useHistory, useParams } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Navbar,
  Button,
  Form,
  Alert,
} from "react-bootstrap";
// Components
import Sidebar from "../components/Sidebar";

import Template1 from "../assets/img/template1.png";
import LogoLink from "../assets/img/logo-link.png";

export default function AddLink() {
  let history = useHistory();
  const [preview, setPreview] = useState(null);
  const [brand, setBrand] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [link, setLink] = useState([
    {
      titleLink: "",
      urlLink: "",
      imageLink: "",
      imageLinkPreview: "",
    },
    {
      titleLink: "",
      urlLink: "",
      imageLink: "",
      imageLinkPreview: "",
    },
  ]);

  const handleChange = (e) => {
    setBrand({
      ...brand,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
    if (e.target.name === "image") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleChangeLink = (e, index) => {
    e.preventDefault();
    // const { name, value } = e.target;
    // const link = [...link];
    // link[index][name] = value;
    // setLink(link);
    const values = [...link];
    if (e.target.name === `titleLink${index}`) {
      values[index].titleLink = e.target.value;
      setLink(values);
    }
    if (e.target.name === `urlLink${index}`) {
      values[index].urlLink = e.target.value;
      setLink(values);
    }
    if (e.target.name === `imageLink${index}` && e.target.files[0]) {
      let url = URL.createObjectURL(e.target.files[0]);
      values[index].imageLinkPreview = url;
      setLink(values);
    }
    if (e.target.name === `imageLink${index}` && e.target.files[0]) {
      let url = e.target.files;
      values[index].imageLink = url;
      setLink(values);
    }
  };

  const addLink = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      formData.set("title", brand.title);
      formData.set("description", brand.description);
      formData.set("image", brand.image[0], brand.image[0].name);
      link.map((item) => {
        formData.append("titleLink", item.titleLink);
        formData.append("urlLink", item.urlLink);
        formData.append("imageLink", item.imageLink[0]);
      });

      const response = await API.post("/link", formData, config);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    addLink();

    <Alert>Sukses</Alert>;
    history.push("/my-link");
  };

  const handleAddLink = () => {
    setLink([
      ...link,
      { titleLink: "", urlLink: "", imageLink: null, imageLinkPreview: null },
    ]);
  };

  const handleRemoveLink = (index) => {
    const data = [...link];
    data.splice(index, 1);
    setLink(data);
  };

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
              className="d-flex vw-100 vh-100 p-5"
              style={{ background: "#E5E5E5" }}
            >
              <Col md={6}>
                <h5 className="fw-bold">Create Link</h5>
                <div className="link-card bg-white mt-5 p-4">
                  <Form>
                    <div>
                      {preview !== null ? (
                        <img
                          style={{ height: "119px", width: "124px" }}
                          src={preview}
                          alt="preview"
                        />
                      ) : (
                        <img src={LogoLink} alt="logo" />
                      )}
                      <label
                        className="ms-5 text-center d-inline-block align-items-center justify-content-center"
                        htmlFor="image"
                      >
                        <input
                          type="file"
                          name="image"
                          hidden
                          id="image"
                          onChange={handleChange}
                        />
                        <p className="btn btn-warning text-white">Upload</p>
                      </label>
                    </div>
                    <br />
                    <Form.Group className="mb-3 ">
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        className="input-title"
                        type="text"
                        placeholder="ex. Your Title"
                        name="title"
                        value={brand.title}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 ">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        className="input-title"
                        type="textarea"
                        placeholder="ex. Description Here"
                        name="description"
                        value={brand.description}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    {link.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="link-container d-flex flex-row p-3 mt-4"
                        >
                          <div className="d-flex flex-column">
                            {item.imageLinkPreview !== "" ? (
                              <img
                                style={{ width: "124px", height: "94px" }}
                                src={item.imageLinkPreview}
                                alt=""
                              />
                            ) : (
                              <img
                                style={{ width: "124px", height: "94px" }}
                                src={LogoLink}
                                alt=""
                              />
                            )}
                            <input
                              type="file"
                              name={`imageLink${index}`}
                              hidden
                              id={`idImageLink${index}`}
                              onChange={(e) => handleChangeLink(e, index)}
                            />
                            <label htmlFor={`idImageLink${index}`}>
                              <p className="mt-4 btn btn-warning text-white">
                                Upload
                              </p>
                            </label>
                          </div>
                          <div className="ps-3 vw-100">
                            <Form.Group>
                              <Form.Label className="d-flex justify-content-between">
                                Title Link
                                <button
                                  className="x-btn p-0"
                                  type="button"
                                  onClick={handleRemoveLink}
                                >
                                  x
                                </button>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Example"
                                name={`titleLink${index}`}
                                value={item.titleLink}
                                onChange={(e) => handleChangeLink(e, index)}
                              />
                              <hr className="mt-0" />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Link</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="www.example.com"
                                name={`urlLink${index}`}
                                value={item.urlLink}
                                onChange={(e) => handleChangeLink(e, index)}
                              />
                              <hr className="mt-0" />
                            </Form.Group>
                            <br />
                          </div>
                        </div>
                      );
                    })}
                    <Button
                      className="mt-4 text-white d-flex flex-row text-center justify-content-center"
                      style={{ width: "100%" }}
                      variant="warning"
                      onClick={handleAddLink}
                    >
                      Add New Link
                    </Button>
                  </Form>
                </div>
              </Col>
              <Col md={3}>
                <div className="mb-5 d-flex align-items-end justify-content-end">
                  <Button
                    style={{ borderRadius: "10px", color: "white" }}
                    variant="warning"
                    type="submit"
                    onClick={handleSubmit}
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
