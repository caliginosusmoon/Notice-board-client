import axios from "axios";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { url } from "../config";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    userId: "",
    passWord: "",
    emailId: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      console.log("formdata: ", registerData);
      formDataToSend.append("firstName", registerData?.firstName);
      formDataToSend.append("lastName", registerData?.lastName);
      formDataToSend.append("emailId", registerData?.emailId);
      formDataToSend.append("userId", registerData?.userId);
      formDataToSend.append("password", registerData?.passWord);
      console.log("sending 2:", formDataToSend);
      const response = await axios.post(`${url}users/add`, registerData);
      alert("User Added Succesfully");
      navigate("/");
    } catch (error) {
      console.log("error", error);
    }

    return (
      <div className="login-container">
        hello
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            placeholder="FirstName"
            value={registerData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="LastName"
            value={registerData.lastName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Enter Valid Email"
            value={registerData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="userid"
            placeholder="Username"
            value={registerData.userid}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={registerData.password}
            onChange={handleChange}
          />
          <button type="Submit">Login</button>
        </form>
      </div>
    );
  };
};

export default Register;
