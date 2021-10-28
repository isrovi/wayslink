import React from "react";
// CSS Bootstrap
import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import Logo from "../assets/img/logo.svg";
import CubesIcon from "../assets/img/icon-cubes.svg";
import UserIcon from "../assets/img/icon-user.svg";
import LinkIcon from "../assets/img/icon-link.svg";
import LogoutIcon from "../assets/img/icon-logout.svg";

function Sidebar(props) {
  return (
    <>
      <div className="vh-100 d-flex flex-column justify-content-between align-items-center py-4">
        <div>
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="mt-5">
            <Link className="text-decoration-none sidebar-text">
              <img src={CubesIcon} alt="" />
              <span>Template</span>
            </Link>
          </div>
          <div className="mt-5">
            <Link className="text-decoration-none sidebar-text">
              <img src={UserIcon} alt="" />
              <span>Profile</span>
            </Link>
          </div>
          <div className="mt-5">
            <Link className="text-decoration-none sidebar-text">
              <img src={LinkIcon} alt="" />
              <span>My Link</span>
            </Link>
          </div>
        </div>
        <div className="pb-5 d-flex flex-column justify-content-end">
          <Link className="text-decoration-none sidebar-text">
            <img src={LogoutIcon} alt="" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
