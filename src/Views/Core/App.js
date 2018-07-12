import React, { Component } from 'react';
import '../../Assets/bootstrap/css/bootstrap.min.css';
import '../../Assets/css/new-age.css';
import Nava from "../../Components/Nav";
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
          {/* <Row> */}
            <Nava />
          {/* </Row> */}

          <div className="bannerImg">
            {/* Landing page section */}
            <Landing />
          </div>
          {/* Services section */}
          <Services />

          {/* Meet the founders section */}
          <Founders />

          {/* More information, who we are, what we do differently */}
          <Info />
          {/* Portfolio section */}
          <Portfolio />
          {/* Process timeline section */}
          <Process />
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
