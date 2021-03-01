import React from 'react';
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
} from 'react-bootstrap';

import '../styles/Faq.css';

const Faq = () => (
  <Container className="faq-container">
    <Row className="faq-inner">
      <Col md={10} className="offset-md-1">
        <div className="faq-intro">
          <h2>Preguntas frecuentes</h2>
          <p>¿Tienes alguna duda sobre Deerlab? Posiblemente acá este la respuesta.</p>
        </div>
        <Accordion>
          <Row>
            <Col md={6}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  ¿En donde estamos ubicados?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p>Actualmente nos encontramos físicamente en Guatemala, justo en el Departamento de Suchitepéquez.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  ¿Cuándo lanzaran el próximo curso?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p>Estamos trabajando en los próximos cursos, y pronto podrás ver mas información y fechas en la sección <b>Cursos</b> en esta pagina web.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  ¿Que tipo de proyectos trabajan?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p>Realizamos proyectos para las necesidades que se adapten a los requerimientos del cliente, estos pueden ir desde Aplicaciones Web, Aplicaciones Móviles e inclusive Aplicaciones de Escritorio.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  ¿Necesito cotización, como los contacto?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <p>Si necesitas saber información sobre alguno de nuestros servicios, puedes escribirnos un correo a <b>info@deerlab.studio</b> y nosotros estaremos respondiendo lo antes posible.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
          </Row>
        </Accordion>
      </Col>
    </Row>
  </Container>
);

export default Faq;
