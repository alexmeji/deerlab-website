import React from 'react';
import {
  Row,
  Col,
  Container,
  Image,
} from 'react-bootstrap';

import '../styles/Footer.css';
import DeerlabLogo from '../images/BrandPage.png';

const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col className="footer-elements">
          <Image src={DeerlabLogo} className="brand-logo" />
          <p>© 2021 Deerlab Studio</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
