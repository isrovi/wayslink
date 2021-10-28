import React from "react";
// CSS Bootstrap
import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import Logo from "../assets/img/logo.svg";
import CubesIcon from "../assets/img/icon-cubes.svg";
import UserIcon from "../assets/img/icon-user.svg";
import ChainIcon from "../assets/img/icon-chain.svg";
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
              <span className="ps-3">Template</span>
            </Link>
          </div>
          <div className="mt-5">
            <Link className="text-decoration-none sidebar-text">
              <img src={UserIcon} alt="" />
              <span className="ps-3">Profile</span>
            </Link>
          </div>
          <div className="mt-5">
            <Link className="text-decoration-none sidebar-text">
              <img src={ChainIcon} alt="" />
              <span className="ps-3">My Link</span>
            </Link>
          </div>
        </div>
        <div className="pb-5 d-flex flex-column justify-content-end">
          <Link className="text-decoration-none sidebar-text">
            <img src={LogoutIcon} alt="" />
            <span className="ps-3">Logout</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
