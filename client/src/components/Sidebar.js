import React, { useContext } from "react";

import { Link, useHistory, NavLink } from "react-router-dom";
import { UserContext } from "../context/userContext";

import Logo from "../assets/img/logo.svg";
import CubesIcon from "../assets/img/icon-cubes.svg";
import UserIcon from "../assets/img/icon-user.svg";
import ChainIcon from "../assets/img/icon-chain.svg";
import LogoutIcon from "../assets/img/icon-logout.svg";

function Sidebar(props) {
  const [state, dispatch] = useContext(UserContext);

  let history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGOUT",
    });
    history.push("/");
  };

  return (
    <>
      <div className="vh-100 d-flex flex-column justify-content-between align-items-center py-4">
        <div>
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="mt-5">
            <NavLink
              activeClassName="text-warning"
              className="text-decoration-none sidebar-text"
              to="/template"
            >
              <img src={CubesIcon} alt="" />
              <span className="ps-3">Template</span>
            </NavLink>
          </div>
          <div className="mt-5">
            <NavLink
              activeClassName="text-warning"
              className="text-decoration-none sidebar-text"
              to="/my-account"
            >
              <img src={UserIcon} alt="" />
              <span className="ps-3">Profile</span>
            </NavLink>
          </div>
          <div className="mt-5">
            <NavLink
              activeClassName="text-warning"
              className="text-decoration-none sidebar-text"
              to="/my-link"
            >
              <img src={ChainIcon} alt="" />
              <span className="ps-3">My Link</span>
            </NavLink>
          </div>
        </div>
        <div className="pb-5 d-flex flex-column justify-content-end" to="/">
          <Link
            className="text-decoration-none sidebar-text"
            onClick={handleLogout}
          >
            <img src={LogoutIcon} alt="" />
            <span className="ps-3">Logout</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
