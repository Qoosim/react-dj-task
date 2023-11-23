import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/loginForm/LoginForm";

const LOGIN_URL = "https://stg.dhunjam.in/account/admin/login";
const USER_DATA_URL = "https://stg.dhunjam.in/account/admin/4";

// DJ@4
// Dhunjam@2023
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginAdmin = async (e) => {
    e.preventDefault();
    console.log({ username, password });
    try {
      const loginRes = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!loginRes.ok) {
        throw Error("Failed to login. Check your credentials.");
      }

      const loginData = await loginRes.json();
      const { token } = loginData.data;
      console.log("response data", loginData);

      navigate("/admin", {
        state: {
          token: token,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <LoginForm
        loginAdmin={loginAdmin}
        setUsername={setUsername}
        setPassword={setPassword}
        username={username}
        password={password}
      />
    </>
  );
};

export default Login;
