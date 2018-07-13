import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import Cabin from "../../Assets/img/portfolio/cabin.png";
import "./style.css";

class Portfolio extends Component {

  render() {
    return (

      <section className="portfolio" id="portfolio">
        <div className="main-container shrink">
          <header className="section__header">
            <h2>Portfolio</h2>
            <span className="section__hint">A collection of our previous work</span>
          </header>

          <Row>
            <Col className="text-align-center" md="4" lg="4">
              <a className="portfolio-item d-block mx-auto" href="http://orioninvoices.x10host.com/">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={Cabin} alt="" />
              </a>
              <div className="portfolio-text">
                <h2 className="section__hint">Orion Invoices</h2>
              </div>
            </Col>

            <Col className="text-align-center" md="4" lg="4">
              <a className="portfolio-item d-block mx-auto text-align-center" href="http://www.krishnakapadia.com/">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={Cabin} alt="" />
              </a>
              <div className="portfolio-text">
                <h2 className="section__hint">krishnakapadia.com</h2>
              </div>
            </Col>

            <Col className="text-align-center" md="4" lg="4">
              <a className="portfolio-item d-block mx-auto" href="http://krishnakapadia.com/ambaSite/index.php#">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={Cabin} alt="" />
              </a>
              <div className="portfolio-text">
                <h2 className="section__hint">Amba screen printers</h2>
              </div>
            </Col>

          </Row>

          {/* <hr />

          <Row>
            <Col className="text-align-center" md="4" lg="4">
              <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={Cabin} alt="" />
              </a>
            </Col>

            <Col className="text-align-center" md="4" lg="4">
              <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={Cabin} alt="" />
              </a>
            </Col>

            <Col className="text-align-center" md="4" lg="4">
              <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={Cabin} alt="" />
              </a>
            </Col>
          </Row> */}
        </div>
      </section>
    );
  }

}

export default Portfolio;
