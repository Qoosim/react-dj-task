import React from "react";
import { Link } from 'react-router-dom';

const LoginForm = ({
  loginAdmin,
  setUsername,
  setPassword,
  username,
  password,
}) => {
  return (
    <div>
      <main className="flex justify-center items-center h-screen">
        <div className="w-1/4">
          <h1 className="text-center p-6 text-2xl font-bold">
            Venue Admin Login
          </h1>
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
          <div className="text-center">
            <Link to="#">New Registration?</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginForm;