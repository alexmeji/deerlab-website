import React from 'react';

import '../styles/BoxInfo.css';
import DeerlabLogo from '../static/images/BrandPage.png';

const BoxInfo = () => (
  <div className="box-info-container">
    <div className="box-info-container-image">
      <img className="box-info-container-source" src={DeerlabLogo} alt="Info Container" />
    </div>
    <div className="box-info-container-text">
      <p className="box-info-title">Hola soy el titulo!</p>
      <p className="box-info-text">Yo soy un texto informativo sobre el titulo y la foto</p>
    </div>
  </div>
);

export default BoxInfo;
