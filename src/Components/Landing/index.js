import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ChimeraLogo from "../../Assets/img/ChimeraLogo.svg";
import "./style.css";

class Landing extends Component {

  render() {
    return (
      <header className="masthead align-items-center justify-content-center">
        <Container className="banner">
          <Row className="align-items-center justify-content-center">
            {/* <Col md="12"> */}
              <img className="banner-logo" src={ChimeraLogo} alt="Chimera Logo" />
            {/* </Col> */}

            <Row>
              <h1 className="bannertext text-align-center">Chimera<br />
                <p className="banner-subtext">Web development</p>
                <p><small>We help businesses save time through software</small></p></h1>
            </Row>
          </Row>
        </Container>

        <div className="arrowContainer">
          <AnchorLink href='#theTeam'>
            <a href="#theTeam" className="btn btn-circle js-scroll-trigger">
              {/* <div className="arrowText">
                Meet the founders
              </div> */}

              <i className="fa fa-angle-down"></i>
            </a>
          </AnchorLink>
        </div>
      </header>
    );
  }

}

export default Landing;
