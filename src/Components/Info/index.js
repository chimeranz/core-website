import React, { Component } from 'react';
import { Row, Col, Button } from "reactstrap";
import "./style.css";

class Info extends Component {

  render() {
    return (
      <section className="features" id="info">
        <div className="main-container shrink">
          <div className="section-heading text-center">
            <header className="section__header">
              <h2>What we do differently?</h2>
            </header>

            <div className="section__content shrink center">
              <p>
                We work to your vision, and as a valued Client, your
                conceptualisation will be transformed through our design services.
                We are also happy to create a website based on a rough outline,
                and collaborate regularly with you to realise your online site.

                Choose us for an affordable, modern and relevant website, made on
                cross platform technologies that will enable great accessibility
                on any device, catering to your diverse consumer base.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default Info;
