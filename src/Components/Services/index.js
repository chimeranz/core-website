import React, { Component } from 'react';
import serviceImg from "../../Assets/img/services-icon.svg";
import FontAwesome from "react-fontawesome";
import { Row, Col, Container } from "reactstrap";
import "./style.css";

class Services extends Component {

  render() {
    return (
      <section className="features" id="services">
        <div className="main-container shrink">
          <div className="section-heading text-center">
            <header className="section__header">
              <h2>Services</h2>
              <p className="section__hint">What we can offer your company</p>
            </header>

            <Container className="section__content">

              <Row>
                <Col lg="4">
                  <div className="feature-item">
                    <FontAwesome className="fontAwesome" name='swimmer' />
                    <h3>Streamline Process</h3>
                    <br />
                    <p className="">Our process makes it easier and cheaper for you to get the website you want</p>
                  </div>
                </Col>

                <Col lg="4">
                  <div className="feature-item">
                    <FontAwesome className="fontAwesome text-center" name='pen-nib' />
                    <h3>Innovative Design</h3>
                    <br />
                    <p className="">We design for each client differently based on their unique needs and wants</p>
                  </div>
                </Col>

                <Col lg="4">
                  <div className="feature-item">
                    <FontAwesome className="fontAwesome text-center" name='rocket' />
                    <h3>Speedy Development</h3>
                    <br />
                    <p className="">Our small team allows us to complete projects quickly and make changes based off your needs</p>
                  </div>
                </Col>

              </Row>

              <Row>
                <Col lg="6">
                  <div className="feature-item center">
                    <FontAwesome className="fontAwesome" name='swimmer' />
                    <h3>Website Development</h3>
                    <br />
                    <p className="alignLeft">We specialise in website development and design.
                      Whether your looking to get a website, or looking to have your
                      existing one redesigned, we can help!</p>
                  </div>
                </Col>

                <Col lg="6">
                  <div className="feature-item center">
                    <FontAwesome className="fontAwesome" name='swimmer' />
                    <h3>Software Development</h3>
                    <br />
                    <p className="alignLeft">We also specialise creating custom built web based software for
                    businesses such as Online Invoicing systems, Inventory systems and Point of Sales applications.</p>
                  </div>
                </Col>
              </Row>
              
            </Container>

          </div>
        </div>
      </section>
    );
  }

}

export default Services;
