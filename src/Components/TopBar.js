import React from "react";
import "../css/Homepage.css";
import { useNavigate } from "react-router-dom";
import logoutimg from "../assets/icons/ant-design_logout-outlined.svg";

const TopBar = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("userData");
  };
  return (
    <div className="top-outer-container">
      <div className="username">{userData?.firstName}</div>
      <div className="logout-icon" onClick={() => handleLogout()}>
        <img src={logoutimg} alt="logout" height={"20px"} />
      </div>
    </div>
  );
};

export default TopBar;
