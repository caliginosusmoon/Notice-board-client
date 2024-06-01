import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../config";

const Login = () => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginResponse = await validateLogin();
    console.log(loginResponse);
    if (loginResponse) {
      // navigate("/home", { state: { userData: userData } });
    } else {
      alert("invalid login");
    }
  };

  const validateLogin = async () => {
    const loginData = {
      userId: userid,
      passWord: password,
    };

    console.log(loginData);
    try {
      const res = await axios
        .post(`${url}user/login`, {
          userId: userid,
          passWord: password,
        })
        .catch((err) => {
          console.log(err);
          //   setErrorAlert(true);
          // window.alert("Invalid credentials")
        });
      // const res = await axios.post(
      //   "http://localhost:5000/user/login",
      //   {
      //     userId: userid,
      //     passWord: password,
      //   }
      //   //   {
      //   //     headers: {
      //   //       "Content-Type": "multipart/form-data",
      //   //     },
      //   //   }
      // );
      // .then(setUserData)
      console.log(res?.data);
      setUserData(res?.data?.user);
      console.log("userData is ", userData);
      if (res?.data?.message === "Login Successful") {
        navigate("/home", { state: { userData: res?.data?.user } });
        const udata = {
          firstName: res?.data?.user?.firstName,
          lastName: res?.data?.user?.lastName,
          email: res?.data?.user?.email,
        };
        localStorage.setItem("userData", JSON.stringify(udata));

        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="userid"
          placeholder="Username"
          value={userid}
          onChange={(e) => {
            setUserid(e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="Submit">Login</button>
        <div className="register-text">
          <div>Don't have an account?</div>
          <div
            className="action-text"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
