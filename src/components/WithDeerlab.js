import React from 'react';
import {
  Container,
  Image,
  Row,
  Col
} from 'react-bootstrap';

import '../styles/WithDeerlab.css';
import HeadPicture from '../images/page_with_deerlab.png';

const WithDeerlab = () => (
  <div className="container-cover">
    <Container>
      <Row>
        <Col xl="6" className="container-titles">
          <h4>¿Tienes una ídea en mente y quieres hacerla realidad?</h4>
          <h2>Nosotros lo creamos para ti.</h2>
        </Col>
        <Col xl="6">
          <Image src={HeadPicture} className="image-cover" alt="PC Image" />
        </Col>
      </Row>
    </Container>
  </div>
);

export default WithDeerlab;
