import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Links from "../../Constants/Links";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "./style.css";

class NavDots extends Component {

  constructor(props) {
    super(props);

    this.state = {
      prevDot: null
    }
  }

  activeDot = (element) => {
    if(this.state.prevDot != null) {
      this.state.prevDot.className = "";
    }

    let dot = element.target;
    dot.className = "active";
    this.setState({ prevDot: dot})
  }

  render() {
    return (
      <div data-spy="affix" id="dot-nav" ref="dotNav">
        <Col xs="0">
          <ul>
            <AnchorLink className="no-margin" href='#page-top'><li onClick={this.activeDot} className="awesome-tooltip active" title="Home"></li></AnchorLink>

            {
              Links.map((item) => {
                return(
                  <AnchorLink className="no-margin" href={`#${item.ref}`}><li onClick={this.activeDot} className="awesome-tooltip" title={item.title}></li></AnchorLink>
                );
              })
            }

          </ul>
        </Col>
      </div>
    );
  }

}

export default NavDots;
