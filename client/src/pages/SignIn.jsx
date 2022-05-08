import "../Styles/SignIn.css";
import React, { useState } from "react";
import axios from "axios";
import logo from "../Images/bluel.png";
function App() {
  const [show, setShow] = useState("login");
  const changetoSignup = () => setShow("signup");
  const changetoLogin = () => setShow("login");
  console.log(show);

  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegisterSubmit = async () => {
    const user_data = {
      type: type,
      name: name,
      email: email,
      password: password,
      phone: phone,
    };
    const response = await axios.post(
      "http://localhost:4000/register",
      user_data
    );
    console.log(response.data);
    if (response.data.success) {
      window.location.href = `/verify`;
    }
  };

  const handleLoginSubmit = async () => {
    const user_data = {
      username: email,
      password: password,
    };
    const response = await axios.post("http://localhost:4000/login", user_data);
    console.log(response.data);
    if (response.data.success) {
      localStorage.setItem("username", user_data.username);
      const response = await axios.post(
        "http://localhost:4000/user",
        user_data
      );
      localStorage.setItem("username", user_data.username);
      if (response.data.user.type == "user") window.location.href = `/user`;
      else window.location.href = `/ngo`;
    }
  };

  return (
    <>
      <div className="HeroContainer">
        <div className="imageContainer">
          <h2 className="imageHeading m-5">
            <img src={logo} alt="logo" srcset="" id="logo" />
           <b> Re-Medi</b>
          </h2>
        </div>

        <div className="formContainer">
          {show === "login" ? (
            <form action="" className="loginForm">
              <span className="formHeading">LOG-IN</span>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(() => e.target.value)}
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(e) => setPassword(() => e.target.value)}
                />
                <label for="floatingPassword">Password</label>
              </div>
              <button
                type="button"
                className="loginBtn btn btn-primary my-3"
                onClick={handleLoginSubmit}
              >
                Login
              </button>
              <hr />
              <button
                type="button"
                onClick={changetoSignup}
                className="Changelogin btn btn-primary my-3"
              >
                Don't have an Account yet?
              </button>
            </form>
          ) : (
            <form className="signupForm">
              <span className="formHeading">SIGN-UP</span>
              <select
                onChange={(e) => setType(() => e.target.value)}
                class="form-select"
                aria-label="Default select example"
              >
                <option selected>Select User Type</option>
                <option value="user">User</option>
                <option value="ngo">NGO</option>
              </select>
              <hr />
              <div class="form-floating mb-3">
                <input
                  onClick={(e) => setName(() => e.target.value)}
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onClick={(e) => setEmail(() => e.target.value)}
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onClick={(e) => setPassword(() => e.target.value)}
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div className="form-floating">
                <input
                  onChange={(e) => setPhone(() => e.target.value)}
                  type="number"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Mobile No.</label>
              </div>
              <button
                onClick={handleRegisterSubmit}
                type="button"
                className="loginBtn btn btn-primary my-3"
              >
                Sign Up
              </button>
              <hr />
              <button
                type="button"
                onClick={changetoLogin}
                className="Changelogin btn btn-primary my-3"
              >
                Already have an Account yet?
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
