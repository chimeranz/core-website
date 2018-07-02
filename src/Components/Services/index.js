import React, { Component } from 'react';
import serviceImg from "../../Assets/img/services-icon.svg";
import FontAwesome from "react-fontawesome";
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

            <div className="row">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="feature-item">
                      <i className="icon-screen-smartphone text-primary"></i>
                      <h3>Streamline process</h3>
                      <p className="text-muted">Our process makes it easier and cheaper for you to get the website you want</p>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="feature-item">
                      <i className="icon-camera text-primary"></i>
                      <h3>Innovative Design</h3>
                      <p className="text-muted">We design for each client differently based on their unique needs and wants</p>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="feature-item">
                      <i className="icon-camera text-primary"></i>
                      <h3>Speedy Development</h3>
                      <p className="text-muted">Our small team allows us to complete projects quickly and make changes based of your needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default Services;
