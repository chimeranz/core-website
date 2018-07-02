import React, { Component } from 'react';
import Nav from "../../Components/Nav";
import Info from "../../Components/Info";
import NavDots from "../../Components/NavDots";
import Landing from "../../Components/Landing";
import Founders from "../../Components/Founders";
import Services from "../../Components/Services";
import Process from "../../Components/Process";
import Portfolio from "../../Components/Portfolio";
import ContactUs from "../../Components/ContactUs";
import Footer from "../../Components/Footer";

import { Row, Col } from 'reactstrap';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <NavDots />

        <div id="page-top">
          <Row>
            <Nav />
          </Row>

          <div className="bannerImg">
            {/* Landing page section */}
            <Landing />
          </div>
          {/* Meet the founders section */}
          <Founders />

          {/* More information, who we are, what we do differently */}
          <Info />
          {/* Services section */}
          <Services />
          {/* Process timeline section */}
          <Process />
          {/* Portfolio section */}
          <Portfolio />
          {/* Contact Us section */}
          <ContactUs />

          {/* Footer */}
          <Footer />
        </div>
      </div>

    );
  }

}

export default App;
