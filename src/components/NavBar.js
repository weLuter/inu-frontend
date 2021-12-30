import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, Row } from 'react-bootstrap';
import { FileCodeFill, Telegram, Twitter, Medium, Github } from "react-bootstrap-icons";

const navbar= () =>{
  return (
  <Navbar className="NavBar" expand="lg">
    <Container>
      <Navbar.Brand href="#home" style={{color: "#ccd1d9"}}>Inu Capital</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav.Link href="#app"><Button style={{backgroundColor: "#ccd1d9", color: "black"}} bsClass="button-launch">Launch App</Button></Nav.Link>
      {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        {/* <Nav className="me-auto"> */}
        {/* </Nav> */}
      {/* </Navbar.Collapse> */}
    </Container>
  </Navbar>
  );
}

export default navbar;