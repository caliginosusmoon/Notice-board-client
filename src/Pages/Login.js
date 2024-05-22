import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginResponse = validateLogin();
    if (loginResponse) {
      navigate("/home", { state: { userData: userData } });
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
      //   const res = await axios
      //     .post("http://localhost:5000/user/login", {
      //       userId: userid,
      //       passWord: password,
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //       //   setErrorAlert(true);
      //       // window.alert("Invalid credentials")
      //     });
      const res = await axios.post(
        "http://localhost:5000/user/login",
        {
          userId: userid,
          passWord: password,
        }
        //   {
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //     },
        //   }
      );
      // .then(setUserData)
      console.log(res.data, loginData);
      setUserData(() => res?.data);
      if (res.message === "Login Successful") {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userid"
          value={userid}
          onChange={(e) => {
            setUserid(e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="Submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
