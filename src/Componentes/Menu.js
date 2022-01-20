import React from 'react';
import {Link} from "react-router-dom"
import {Nav,Navbar} from "react-bootstrap"


function Menu() {
  
    return (
    
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand >Rick and Morty</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" >Personajes</Nav.Link>
          <Nav.Link as={Link} to="/alta">Registrate</Nav.Link>
          <Nav.Link as={Link} to="/ingresar">Ingresa</Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link as={Link} to="/buscar">Buscar</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
    );
  
  
}

export default Menu;