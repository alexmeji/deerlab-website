import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import '../styles/TopMenu.css';
import DeerLabLogo from '../static/images/BrandPage.png';

const TopMenu = () => (
  <Navbar className="top-menu">
    <Navbar.Brand>
      <Image src={DeerLabLogo} className="brand-logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="deerlab-navbar-nav" />
    <Navbar.Collapse id="deerlab-navbar-nav" className="justify-content-end">
      <Nav className="mr-auto top-menu">
        <NavLink to="/home" activeClassName="active" className="topmenu-link">Inicio</NavLink>
        <NavLink to="/courses" activeClassName="active" className="topmenu-link">Cursos</NavLink>
        <NavLink to="/team" activeClassName="active" className="topmenu-link">Equipo</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default TopMenu;
