import React from 'react';

import '../styles/BoxContainers.css';

import Phone from '../static/images/phone.png';

const BoxContainers = () => (
  <div className="box-containers">
    <div className="box">
      <img
        className="box-image"
        src={Phone}
        alt="Box item show"
      />
      <p className="box-text">Esto es un texto de prueba para el componente Box. Acá deberemos colocar la información necesario a mostrar.</p>
    </div>
    <div className="box">
      <img
        className="box-image"
        src={Phone}
        alt="Box item show"
      />
      <p className="box-text">Esto es un texto de prueba para el componente Box. Acá deberemos colocar la información necesario a mostrar.</p>
    </div>
    <div className="box">
      <img
        className="box-image"
        src={Phone}
        alt="Box item show"
      />
      <p className="box-text">Esto es un texto de prueba para el componente Box. Acá deberemos colocar la información necesario a mostrar.</p>
    </div>
    <div className="box">
      <img
        className="box-image"
        src={Phone}
        alt="Box item show"
      />
      <p className="box-text">Esto es un texto de prueba para el componente Box. Acá deberemos colocar la información necesario a mostrar.</p>
    </div>
  </div>
);


export default BoxContainers;
