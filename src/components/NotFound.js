import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';

import '../styles/NotFound.css';

const goToHome = (e) => {
  e.preventDefault();
  document.location.href = "/";
}

const NotFound = () => (
  <Container className="not-found-container">
    <Row className="text-center">
      <Col xs={12} md={12}>
        <h2>La página que buscas no existe!</h2>
        <h4>Hemos detectado un error</h4>
        <Button onClick={goToHome}>Regresa al inicio</Button>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
