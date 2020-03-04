import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/TopMenu.css';
import DeerLabLogo from '../static/images/BrandPage.png';

const TopMenu = () => (
  <nav className="flex items-center justify-between flex-wrap bg-deerlab-dark p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <img className="brand-logo" alt="DeerLab Logo" src={DeerLabLogo} />
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ml-4">
      <div className="lg:flex-grow topmenu">
        <NavLink to="/home" activeClassName="active" className="lg:inline-block lg:mt-0 text-teal-200 mr-4 topmenu-link">Inicio</NavLink>
        <NavLink to="/courses" activeClassName="active" className="lg:inline-block lg:mt-0 text-teal-200 mr-4 topmenu-link">Cursos</NavLink>
        <NavLink to="/persons" activeClassName="active" className="lg:inline-block lg:mt-0 text-teal-200 mr-4 topmenu-link">Equipo</NavLink>
      </div>
    </div>
  </nav>
);

export default TopMenu;
