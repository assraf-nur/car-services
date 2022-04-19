import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const Header = () => {

  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
  }

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Helmet>
            <title>
              Car-Service
            </title>
          </Helmet>
          <img href="#home#home" height={30} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link href="home#experts">Experts</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            {
              user ?
                <button onClick={handleSignOut} className="btn btn-danger">Sign Out</button>
              :
              <Nav.Link as={Link} to='/login'>
              Login
             </Nav.Link>
            } 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
