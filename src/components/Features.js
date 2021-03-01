import React from 'react';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';

import '../styles/Features.css';
import CloudComputing from '../images/page_cloud_computing.png';
import Despegar from '../images/page_despegar.png';
import tick from '../images/tick.svg';

const Features = () => (
  <Container className="features-container">
    <Row className="features-item">
      <Col xl="6">
        <Image src={CloudComputing} fluid alt="support" />
      </Col>
      <Col xl="6" className="features-item-text">
        <h2>Te llevamos a la nube.</h2>
        <p>Somos expertos en tecnologías cloud y llevamos tus ideas a ella.</p>
        <ul>
          <li><Image src={tick} alt="tick" /> Disponibilidad sin limites</li>
          <li><Image src={tick} alt="tick" /> Sistemas altamente escalables</li>
          <li><Image src={tick} alt="tick" /> Reducción de costos</li>
          <li><Image src={tick} alt="tick" /> Monitoreas en tiempo real</li>
        </ul>
      </Col>
    </Row>
    <Row className="features-item">
      <Col xl="6" className="features-item-text">
        <h2>Aceleramos el éxito.</h2>
        <p>Con el mejor equipo y la metodología exacta llevamos tu producto a la cima.</p>
        <ul>
          <li><Image src={tick} alt="tick" /> Planificación y coordinación</li>
          <li><Image src={tick} alt="tick" /> Análisis de procesos</li>
          <li><Image src={tick} alt="tick" /> Tecnologías modernas</li>
          <li><Image src={tick} alt="tick" /> Soluciones seguras</li>
        </ul>
      </Col>
      <Col xl="6">
        <Image src={Despegar} fluid alt="support" />
      </Col>
    </Row>
  </Container>
);

export default Features;
