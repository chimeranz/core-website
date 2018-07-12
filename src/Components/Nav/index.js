import React, { Component } from 'react';
import { AnimatedBg, Transition } from 'scroll-background';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Links from "../../Constants/Links";
import $ from 'jquery';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./style.css";

class Nava extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expand: false
    }
  }

  componentDidMount() {
    $(window).scroll(function(){
    	$('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
    });
  }

  toggle = () => {
    this.setState({ expand: !this.state.expand });
  }

  render() {
    return (
      <Navbar className="" id="mainNav">
        <NavbarBrand href="/" className="mr-auto">
          <AnchorLink className="no-margin box" href='#page-top'>
            <a className="navbar-brand js-scroll-trigger" href="#page-top">CHIMERA</a>
          </AnchorLink>
        </NavbarBrand>


        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.expand} navbar>
          <Nav className="navbar-collapse" id="navbarResponsive" navbar>
            <ul className="navbar-nav ml-auto">
              {
                Links.map((item) => {
                  if(item.ref == 'contactUs') {
                    return (
                      <li className="nav-item nav-item-box">
                        <AnchorLink className="no-margin" href={`#${item.ref}`}>
                          <a className="nav-link js-scroll-trigger" href={`#${item.ref}`}>{item.title}</a>
                        </AnchorLink>
                      </li>
                    );
                  }else if(item.ignore == null || item.ignore != true) {
                    return(
                      <li className="nav-item">
                        <AnchorLink className="no-margin" href={`#${item.ref}`}>
                          <a className="nav-link js-scroll-trigger" href={`#${item.ref}`}>{item.title}</a>
                        </AnchorLink>
                      </li>
                    );
                  }
                })
              }

            </ul>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }

}

export default Nava;
