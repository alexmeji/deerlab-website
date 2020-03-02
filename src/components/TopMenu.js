import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import '../styles/TopMenu.css';
import DeerLabLogo from '../static/images/BrandPage.png';

const TopMenu = () => (
  <Navbar className="deerlab-navbar" expand="lg">
    <Navbar.Brand href="#home">
      <img className="brand-logo" alt="DeerLab Logo" src={DeerLabLogo} />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default TopMenu;
