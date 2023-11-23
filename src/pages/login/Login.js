
import React, { useState } from 'react';
// import { Link } from "react-router-dom";

const LOGIN_URL = "https://stg.dhunjam.in/account/admin/login";
const USER_DATA_URL = "https://stg.dhunjam.in/account/admin/4";

const Login = () => {
  const [userToken, setUserToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginAdmin = async (e) => {
    e.preventDefault()
    console.log({username, password});
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
      setUserToken(token);
      console.log("response data", loginData);

      const userRes = await fetch(USER_DATA_URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (!userRes.ok) {
        throw Error("failed to get user");
      }
      const result = await userRes.json();
      setUserData(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(userData)

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="w-1/4">
        <h1 className="text-center p-6 text-2xl font-bold">Venue Admin Login</h1>
        <form className="flex flex-col gap-4" onSubmit={loginAdmin}>
          <input
            type="text"
            placeholder="Username"
            className="p-2 rounded-lg outline outline-1 bg-transparent"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded-lg outline outline-1 bg-transparent"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            type="submit"
            className="flex justify-center items-center bg-[#6741D9] w-full p-2 rounded-lg my-4"
          >
            Sign in
          </button>
        </form>
        <div>New Registration?</div>
      </div>
    </main>
  )
}

export default Login