import React from 'react';
import {
  Navbar,
  Nav,
  Image,
  Container,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import '../styles/TopMenu.css';
import DeerlabLogo from '../images/BrandPage.png';

const TopMenu = () => (
  <Navbar className="top-menu" expand="lg" bg="dark">
    <Container>
      <Navbar.Brand>
        <Image src={DeerlabLogo} className="brand-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="deerlab-navbar-nav" />
      <Navbar.Collapse id="deerlab-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto top-menu-list">
          <NavLink to="/home" activeClassName="active" className="topmenu-link">Inicio</NavLink>
          <NavLink to="/courses" activeClassName="active" className="topmenu-link">Cursos</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopMenu;
