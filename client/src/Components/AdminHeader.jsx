import React from 'react'
import { Nav, NavDropdown, Container, Navbar } from 'react-bootstrap'
import Button from '@mui/material/Button';
import { FaDownload } from 'react-icons/fa';
// import '../Styles/Header.css'

export default function AdminHeader() {
  const logOut = () => {
    console.log("log out");
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    // Toast
    window.location.replace("/");
  };
  return (
    <Navbar bg="light" className="p-3 sticky-top" expand="lg">
      <Container className="navbarContainer">
        <Navbar.Brand href="#home" className="navbarBrand"><strong>Career Development Center <br /></strong><span className="fw-light fs-5">IIT ISM Dhanbad</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="me-auto"></div>
          <Nav className="">
            <Button className='mx-3'><FaDownload className='mx-3'></FaDownload> HR Information</Button>
            <Button onClick={logOut}>Log Out</Button>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

