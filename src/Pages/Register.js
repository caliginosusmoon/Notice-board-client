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
      const response = await axios
        .post(`${url}user/add`, registerData)
        .then((res) => {
          alert("User Added Succesfully");
          navigate("/");
          console.log("res", res);
        });
      console.log(response);
    } catch (error) {
      alert("user exists");
      console.log("error", error);
    }
  };
  return (
    <div>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <hr />
          <input
            type="text"
            name="firstName"
            placeholder="FirstName"
            value={registerData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="LastName"
            value={registerData.lastName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="emailId"
            placeholder="Enter Valid Email"
            value={registerData.emailId}
            onChange={handleChange}
          />
          <input
            type="text"
            name="userId"
            placeholder="Username"
            value={registerData.userId}
            onChange={handleChange}
          />
          <input
            type="password"
            name="passWord"
            placeholder="Password"
            value={registerData.passWord}
            onChange={handleChange}
          />
          <button type="Submit">Sign up</button>
          <div className="register-text">
            <div>Already have an account?</div>
            <div
              className="action-text"
              onClick={() => {
                navigate("/");
              }}
            >
              Login
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
