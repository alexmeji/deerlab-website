import React from 'react';

import '../styles/Home.css';
import DeerLabLogo from '../static/images/BrandPage.png';

const Home = () => (
  <h1 className="home-full-cover">
    <img className="center-image-cover" src={DeerLabLogo} alt="Cover how to do" />
  </h1>
);

export default Home;
