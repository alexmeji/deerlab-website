import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';

import '../styles/ContactUs.css';

const openEmailClient = (e) => {
  e.preventDefault();
  window.location.href = `mailto:info@deerlab.studio`;
}

const ContactUs = () => (
  <Container>
    <div className="contactus-box">
      <Row>
        <Col sm={12} md={12}>
          <h2>Si quieres saber mas información de nuestros productos, envíanos un correo y te contactamos lo antes posible.</h2>
          <Button onClick={openEmailClient}>Enviar Correo</Button>
        </Col>
      </Row>
    </div>
  </Container>
);

export default ContactUs;
