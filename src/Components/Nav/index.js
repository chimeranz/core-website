import React, { Component } from 'react';
import { AnimatedBg, Transition } from 'scroll-background';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Links from "../../Constants/Links";
import $ from 'jquery';
import "./style.css";

class Nav extends Component {

  componentDidMount() {
    $(window).scroll(function(){
    	$('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <AnchorLink className="no-margin box" href='#page-top'>
            <a className="navbar-brand js-scroll-trigger" href="#page-top">CHIMERA</a>
          </AnchorLink>

          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="true" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
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
          </div>
        </div>
      </nav>
    );
  }

}

export default Nav;
