import React from 'react';
import {
  Container,
  Row,
  Col,
  CardGroup,
  Card,
} from 'react-bootstrap';

import '../styles/About.css';
import Consultoria from '../images/consultoria.png';
import Desarrollo from '../images/desarrollo.png';
import Talleres from '../images/talleres.png';

const About = () => (
  <Container>
    <Row className="about-titles">
      <Col xl="5">
        <h4>¿Que hacemos?</h4>
        <h2>Conectamos tu negocio a la tecnología.</h2>
        <p>Analizamos y desarrollamos soluciones de alta calidad para satisfacer las necesidades productivas de tus procesos.</p>
      </Col>
      <Col xl="7" />
    </Row>
    <Row className="about-cards">
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={Consultoria} />
          <Card.Body>
            <Card.Title>Consultoría</Card.Title>
            <Card.Text>Somos expertos en apoyar a empresas a definir/mejorar sus procesos y crear la solución precisa para ellos.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={Desarrollo} />
          <Card.Body>
            <Card.Title>Desarrollo</Card.Title>
            <Card.Text>Desarrollamos soluciones a medida que provienen de necesidades reales de nuestros clientes.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={Talleres} />
          <Card.Body>
            <Card.Title>Capacitaciones</Card.Title>
            <Card.Text>Contamos con capacitaciones de alto nivel para formar a los programadores del mañana, trabajando con las últimas tecnologías en el mercado Nacional e Internacional.</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Row>
  </Container>
);

export default About;
