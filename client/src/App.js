import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import SignIn from "./pages/sign_in/SignIn";
import User from "./pages/User";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [type, setType] = useState("");
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/user" element={<User />} />
      {/* <Route path="/" element={<SignIn />} /> */}
    </Routes>
  );
}

export default App;
