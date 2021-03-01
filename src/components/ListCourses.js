import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';

import '../styles/ListCourses.css';

const ListCourses = () => (
  <Container>
    <div className="list-courses">
      <Row>
        <Col>
          <Card className="text-center">
            <Card.Header>Sin cursos</Card.Header>
            <Card.Body>
              <Card.Title>Ops!! No tenemos cursos disponibles</Card.Title>
              <Card.Text>Estamos trabajando en poder crear los mejores cursos para nuestros estudiantes, cuando los tengamos disponibles los encontraras en esta página.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  </Container>
);

export default ListCourses;
