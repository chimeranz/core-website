import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import "./style.css";

class Footer extends Component {

  render() {
    return (
      <Row className="footer">
        <Col md="4">
          Copyright © Chimera 2018
        </Col>

        <Col md="4">
          <h3>Directly Email us at: <a href="mailto:chimeranz@outlook.com">chimeranz@outlook.com</a></h3>
        </Col>

        <Col md="4">
          Powered by Chimera
        </Col>
      </Row>
    );
  }

}

export default Footer;
