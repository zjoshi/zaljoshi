import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import LOGO from './images/smlogo.png';
import './Menu.css';


function Menu() {
  return (


    <Navbar bg="white" sticky="top" className="navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand><img id="logo" src={LOGO}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 justify-content-end"
            style={{width: '100%'}}
            navbarScroll
          >
            <Nav.Link className="about" href="#about">About me</Nav.Link>
            <Nav.Link className="resume" href="#resume">Resume</Nav.Link>
            <Nav.Link className="projects" href="#projects">Projects</Nav.Link>
            <Nav.Link className="art" href="#art">Art</Nav.Link>
            <Nav.Link className="contact" href="#contact">Contact</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Menu;
