import React, { Component } from 'react';
import serviceImg from "../../Assets/img/services-icon.svg";
import FontAwesome from "react-fontawesome";
import { Row, Col, Container } from "reactstrap";
import atomImg from "../../Assets/img/atom.svg";
import softwareIcon from "../../Assets/img/softwareIcon.svg";
import swimmerIcon from "../../Assets/img/swimmer.svg";
import penIcon from "../../Assets/img/pen.svg";
import rocketIcon from "../../Assets/img/rocket.svg";
import "./style.css";

class Services extends Component {

  render() {
    return (
      <section className="features" id="services">
        <div className="main-container shrink">
          <div className="section-heading text-center">
            <header className="section__header">
              <h2>Services</h2>
              <p className="section__hint">What we offer</p>
            </header>
          </div>

          <Container className="section__content">
            <Row className="feature-list">

              <Col className="margin-bottom" md="6">
                <div className="feature-item item-large">
                  <div className="item-icon-container">
                    <img className="item-icon" src={atomImg} alt="Atom image" />
                  </div>
                  <h3>Websites</h3>
                  <br />
                  <p className="">We specialise in website development and design.
                    Whether your looking to get a website, or looking to have your
                    existing one redesigned, we can help!</p>
                </div>
              </Col>

              <Col md="6">
                <div className="feature-item item-large">
                  <div className="item-icon-container">
                    <img className="item-icon" src={softwareIcon} alt="Software image" />
                  </div>
                  <h3>Software</h3>
                  <br />
                  <p className="">We also specialise in creating custom built, web based, software for
                    businesses such as Online Invoicing systems, Inventory systems and Point of Sales applications.</p>
                  </div>
              </Col>
            </Row>
          </Container>

          <div className="section-heading text-center subsection">
            <header className="section__header">
              <h2>Advantages</h2>
              <p className="section__hint">Why choose us</p>
            </header>
          </div>

          <Container className="section__content">
            <Row className="feature-list">
              <Col className="margin-bottom" md="4">
                <div className="feature-item">
                  <div className="item-icon-container">
                    <img className="item-icon" src={swimmerIcon} alt="Swimmer image" />
                  </div>
                  <h3>Streamline Process</h3>
                  <br />
                  <p className="">Our process makes it easier and cheaper for you to get the website you want</p>
                </div>
              </Col>

              <Col className="margin-bottom" md="4">
                <div className="feature-item">
                  <div className="item-icon-container">
                    <img className="item-icon" src={penIcon} alt="Pen image" />
                  </div>
                  <h3>Innovative Design</h3>
                  <br />
                  <p className="">We design for each client differently based on their unique needs and wants</p>
                </div>
              </Col>

              <Col md="4">
                <div className="feature-item">
                  <div className="item-icon-container">
                    <img className="item-icon" src={rocketIcon} alt="Rocket image" />
                  </div>
                  <h3>Speedy Development</h3>
                  <br />
                  <p className="">Our small team allows us to complete projects quickly and make changes based off your needs</p>
                </div>
              </Col>
            </Row>

          </Container>
        </div>

      {/* </div> */}
      </section>
    );
  }

}

export default Services;
