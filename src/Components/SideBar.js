import React from "react";
import home from "../assets/icons/home.png";
import "../css/Homepage.css";
import logo from "../assets/icons/logo.png";

const SideBar = ({ active, setActive }) => {
  return (
    <div>
      <div className="left-container">
        <div className="nav-menu-container">
          <div className="logo-container">
            <img src={logo} alt="logo" width={"60%"} />
          </div>
          <div
            className={`all-notice-container-menu row-container ${
              active === "all" ? "active" : ""
            }`}
            onClick={() => setActive("all")}
          >
            <div className="icon-container">
              <img src={home} alt=""></img>
            </div>
            <div className="menu-container">All Notices</div>
          </div>
          {/* <div
              className={`all-notice-container-menu row-container ${
                active === "imp" ? "active" : ""
              }`}
              onClick={() => setActive("imp")}
            >
              <div className="icon-container">
                <img src={home} alt=""></img>
              </div>
              <div className="menu-container">Important Notices</div>
            </div> */}
          <div
            className={`all-notice-container-menu row-container ${
              active === "dept" ? "active" : ""
            }`}
            onClick={() => setActive("dept")}
          >
            <div className="icon-container">
              <img src={home} alt=""></img>
            </div>
            <div className="menu-container">Department</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
