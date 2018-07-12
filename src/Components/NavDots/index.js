import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Links from "../../Constants/Links";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import $ from 'jquery';
import "./style.css";

class NavDots extends Component {

  constructor(props) {
    super(props);

    this.state = {
      prevDot: null
    }
  }

  componentDidMount() {

    $(document).ready(function(){

        $.scrollTo = $.fn.scrollTo = function(x, y, options){
          if (!(this instanceof $)) return $.fn.scrollTo.apply($('html, body'), arguments);
          options = $.extend({}, {
            gap: {
                x: 0,
                y: 0
            },
            animation: {
                easing: 'swing',
                duration: 600,
                complete: $.noop,
                step: $.noop
            }
          }, options);
          return this.each(function(){
            var elem = $(this);
            elem.stop().animate({
                scrollLeft: !isNaN(Number(x)) ? x : $(y).offset().left + options.gap.x,
                scrollTop: !isNaN(Number(y)) ? y : $(y).offset().top + options.gap.y
            }, options.animation);
          });
        };

        var aChildren = $("nav").children();
        var aArray = [];
        Links.map((item) => {
          aArray.push(item);
        })

        var windowPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var docHeight = $(document).height();

        for (var i = 0; i < aArray.length; i++) {
          var theID = aArray[i].ref;
          var theTitle = aArray[i].title;
          var divPos = $(`#${theID}`).offset().top;
          var divHeight = $(`#${theID}`).height() * 2 - 100;

          if (windowPos >= divPos - 100 && windowPos < (divPos + divHeight)) {
            $("li[title='" + theTitle + "']").addClass("active");
          } else {
            $("li[title='" + theTitle + "']").removeClass("active");
          }
        }

        $(window).scroll(function(){
          var windowPos = $(window).scrollTop();
          var windowHeight = $(window).height();
          var docHeight = $(document).height();

          for (var i = 0; i < aArray.length; i++) {
            var theID = aArray[i].ref;
            var theTitle = aArray[i].title;
            var divPos = $(`#${theID}`).offset().top;
            var divHeight = $(`#${theID}`).height() * 2 - 100;

            if(windowPos > 100 && i > 0 && $("li[title='" + aArray[i].title + "']").hasClass("active")){
              $("li[title='" + aArray[i - 1].title + "']").removeClass("active");
            }else {
              if (windowPos >= divPos - 100 && windowPos < (divPos + divHeight)) {
                $("li[title='" + theTitle + "']").addClass("active");
              } else {
                $("li[title='" + theTitle + "']").removeClass("active");
              }

              if($("li[title='" + aArray[1].title + "']").hasClass("active")){
                $("li[title='Home']").removeClass("active");
              }

              if($("li[title='" + aArray[aArray.length - 1].title + "']").hasClass("active")){
                $("li[title='" + aArray[aArray.length - 2].title + "']").removeClass("active");
              }
            }

          }

        });

    });

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
