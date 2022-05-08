import React, { useState } from "react";
import "../Styles/Header.css";
import axios from "axios";
import logo from "../Images/bluel.png";
import { Link } from "react-router-dom";
export const Header = () => {
  const [type, setType] = useState("");

  const typeDetermination = async () => {
    const user_data = {
      username: localStorage.getItem("username"),
    };
    const response = await axios.post("http://localhost:4000/user", user_data);
    console.log(response.data);
    if (response.data.success) {
      if (response.data.user.type == "user") setType("/user");
      else setType("/ngo");
    }
  };
  typeDetermination();

  const handleLogOut = async () => {
    localStorage.removeItem("username");
    const response = await axios.get("http://localhost:4000/logout");
    console.log(response.data);
    window.location.href = `/`;
  };

  const handleLogin = async () => {
    window.location.href = `/`;
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/user">
            <img src={logo} alt="logo" id="logo" />
            Re-<span>Medi</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={type}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            {localStorage.getItem("username") ? (
              <button
                className="btn btn-sm btn-outline-primary"
                id="logOut"
                onClick={handleLogOut}
              >
                LogOut
              </button>
            ) : (
              <button
                className="btn btn-sm btn-primary"
                id="signin"
                onClick={handleLogin}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
