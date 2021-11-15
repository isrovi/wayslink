import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { API } from "../config/api";

import { Container, Row, Col, Navbar, Button } from "react-bootstrap";
// Components
import Sidebar from "../components/Sidebar";

import IconFind from "../assets/img/icon-find.png";
import LogoFood from "../assets/img/logo-food.png";
import IconView from "../assets/img/icon-view.png";
import IconEdit from "../assets/img/icon-edit.png";
import IconDelete from "../assets/img/icon-delete.png";

import ModalDelete from "../components/modal/ModalDelete";

export default function MyLink() {
  let history = useHistory();
  const [links, setLinks] = useState([]);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [show, setShow] = useState(false);
  const [brandId, setBrandId] = useState(null);

  const getLinks = async () => {
    try {
      const response = await API.get("/links");
      setLinks(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchLink = (value) => {
    setSearch(value);
    if (search !== "") {
      const filteredData = links.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setResult(filteredData);
    } else {
      setResult(links);
    }
  };

  const deleteLink = async (id) => {
    try {
      const response = await API.delete(`/link/${id}`);
      getLinks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    deleteLink(id);
    setShow(false);
  };

  const updateViewCount = async (id) => {
    try {
      const response = await API.patch(`/preview-link/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePreviewLink = (id) => {
    updateViewCount(id);
    history.push("/preview-link/" + id);
  };

  useEffect(() => {
    getLinks();
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
                <Navbar.Brand className="fw-bold">My Links</Navbar.Brand>
              </Container>
            </Navbar>
            <div
              className="vh-100 p-5 d-flex flex-column"
              style={{ background: "#E5E5E5" }}
            >
              <div className="d-flex flex-row justify-content-between align-items-center">
                <h5>All Links</h5>
                <div className="icon-links-counter">
                  <p className="text-white">{links?.length}</p>
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
                    name="search"
                    onChange={(e) => searchLink(e.target.value)}
                  />
                  <hr className="m-0" />
                </div>
                <div>
                  <Button className="text-white" variant="warning">
                    Search
                  </Button>
                </div>
              </div>

              <ModalDelete
                show={show}
                onHide={() => setShow(false)}
                deleteData={handleDelete}
                dataId={brandId}
              />
              {search.length > 1
                ? result.map((item) => {
                    return (
                      <>
                        <div className="d-flex flex-row justify-content-between align-items-center mt-5">
                          <div className="d-flex flex-row align-items-center justify-content-center">
                            <img
                              style={{ height: "100px", width: "100px" }}
                              src={item.image}
                              alt="image"
                            />
                            <div className="ms-3">
                              <div className="d-flex flex-column">
                                <h5>{item.title}</h5>
                                <p>localhost:3000/{item.title}</p>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <h5>{item.viewCount}</h5>
                            <p>Visit</p>
                          </div>
                          <div className="d-flex flex-row">
                            <span onClick={() => handlePreviewLink(item.id)}>
                              <img src={IconView} alt="" />
                            </span>
                            <Link to="/add-link" className="ms-5">
                              <img src={IconEdit} alt="" />
                            </Link>
                            <span
                              className="ms-5"
                              onClick={() => {
                                setShow(true);
                                setBrandId(item.id);
                              }}
                            >
                              <img src={IconDelete} alt="" />
                            </span>
                          </div>
                        </div>
                      </>
                    );
                  })
                : links?.map((item, index) => (
                    <>
                      <div
                        className="d-flex flex-row justify-content-between align-items-center mt-5"
                        key={index}
                      >
                        <div className="d-flex flex-row align-items-center justify-content-center">
                          <img
                            style={{ height: "100px", width: "100px" }}
                            src={item.image}
                            alt="image"
                          />
                          <div className="ms-3">
                            <div className="d-flex flex-column">
                              <h5>{item.title}</h5>
                              <p>localhost:3000/{item.title}</p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex flex-column">
                          <h5>{item.viewCount}</h5>
                          <p>Visit</p>
                        </div>
                        <div className="d-flex flex-row">
                          <span onClick={() => handlePreviewLink(item.id)}>
                            <img src={IconView} alt="" />
                          </span>
                          <Link to="/add-link" className="ms-5">
                            <img src={IconEdit} alt="" />
                          </Link>
                          <span
                            className="ms-5"
                            onClick={() => {
                              setShow(true);
                              setBrandId(item.id);
                            }}
                          >
                            <img src={IconDelete} alt="" />
                          </span>
                        </div>
                      </div>
                    </>
                  ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
