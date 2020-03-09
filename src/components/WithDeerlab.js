import React from 'react';

import '../styles/WithDeerlab.css';
import DeerLabLogo from '../static/images/BrandPage.png';

const WithDeerlab = () => (
  <div className="home-full-cover">
    <img className="center-image-cover" src={DeerLabLogo} alt="Cover how to do" />
    <div className="box-titles">
      <h1>Diseñamos software para ayudarte a crecer!</h1>
      <h5>Tu lo imaginas, nosotros lo logramos.</h5>
    </div>
  </div>
);

export default WithDeerlab;
