import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import krishnaFoundersPhoto from "../../Assets/img/krishnaFoundersPhoto.png";
import githubIcon from "../../Assets/img/github.svg";
import linkedinIcon from "../../Assets/img/linkedin.svg";
import portfolioIcon from "../../Assets/img/kickstarter.svg";
import "./style.css";

class Founders extends Component {

  render() {
    return (
      <section className="section download text-center" id="theTeam">

        <div className="main-container">
          <header className="section__header">
            <h2 className="title section__title ">Meet the Team</h2>
            <span className="section__hint">
              We are two young entrepreneurs with a vision of better design and growth.
            </span>
          </header>

          <Row className="section__content teamy-team">
            <Col className="teamy teamy_style1 teamy_mask-circle">
              <div className="teamy__layout">
                <div className="teamy__preview">
                  <img src={krishnaFoundersPhoto} className="teamy__avatar" alt="Krishna Kapadia Founders photo" />
                </div>
                <div className="teamy__back">
                  <div className="teamy__back-inner">
                    <a href="http://www.krishnakapadia.com" target="_blank" className="social">
                      <img className="social__icon" src={portfolioIcon} alt="" />
                    </a>
                    <a href="https://github.com/krishnaKapadia" target="_blank" className="social">
                      <img className="social__icon" src={githubIcon} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/krishnakapadiasoftware/" target="_blank" className="social">
                      <img className="social__icon" src={linkedinIcon} alt="" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="teamy__content">
                <h3 className="teamy__name">Krishna Kapadia</h3>
                <span className="teamy__post">Founder & Engineer</span>
              </div>
            </Col>

            <Col className="teamy teamy_style1 teamy_mask-circle teamy_zoom-photo">
              <div className="teamy__layout">
                <div className="teamy__preview">
                  <img src={krishnaFoundersPhoto} className="teamy__avatar" alt="The demo photo" />
                </div>
                <div className="teamy__back">
                  <div className="teamy__back-inner">
                    <a href="#0" className="social">
                      <svg className="social__icon"></svg>
                      <span className="social__name">Twitter</span>
                    </a>
                    <a href="#0" className="social">
                      <svg className="social__icon"></svg>
                      <span className="social__name">Codepen</span>
                    </a>
                    <a href="#0" className="social">
                      <svg className="social__icon"></svg>
                      <span className="social__name">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="teamy__content">
                <h3 className="teamy__name">Allister Grange</h3>
                <span className="teamy__post">Founder & Engineer</span>
              </div>
            </Col>

            {/* <article className="teamy teamy_style1 teamy_mask-circle">
              <div className="teamy__layout">
                <div className="teamy__preview">
                  <img src="https://stas-melnikov.ru/cliparts/girl2_424x640.jpg" className="teamy__avatar" alt="The demo photo" />
                </div>
                <div className="teamy__back">
                  <div className="teamy__back-inner">
                    <a href="#0" className="social">
                      <svg className="social__icon"></svg>
                      <span className="social__name">Twitter</span>
                    </a>
                    <a href="#0" className="social">
                      <svg className="social__icon"></svg>
                      <span className="social__name">Codepen</span>
                    </a>
                    <a href="#0" className="social">
                      <svg className="social__icon"></svg>
                      <span className="social__name">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="teamy__content">
                <h3 className="teamy__name">Suzan Lois</h3>
                <span className="teamy__post">Graphic Designer</span>
              </div>
            </article>
            <article className="teamy teamy_style1 teamy_mask-circle teamy_zoom-photo">
              <div className="teamy__layout">
                <div className="teamy__preview">
                  <img src="https://stas-melnikov.ru/cliparts/girl3_424x640.jpg" className="teamy__avatar" alt="The demo photo" />
                </div>
                <div className="teamy__back">
                  <div className="teamy__back-inner">
                    <a href="#0" className="social">
                      <svg className="social__icon"></svg>
                      <span className="social__name">Twitter</span>
                    </a>
                    <a href="#0" className="social">
                      <svg className="social__icon"></svg>
                      <span className="social__name">Codepen</span>
                    </a>
                    <a href="#0" className="social">
                      <svg className="social__icon"></svg>
                      <span className="social__name">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="teamy__content">
                <h3 className="teamy__name">Krishna Kapadia</h3>
                <span className="teamy__post">Founder</span>
              </div>
            </article>

            <article className="teamy teamy_style1 teamy_mask-circle teamy_zoom-rotate-photo">
              <div className="teamy__layout">
                <div className="teamy__preview">
                  <img src="https://stas-melnikov.ru/cliparts/girl4_424x640.jpg" className="teamy__avatar" alt="The demo photo" />
                </div>
                <div className="teamy__back">
                  <div className="teamy__back-inner">
                    <a href="#0" className="social">
                      <svg className="social__icon"></svg>
                      <span className="social__name">Twitter</span>
                    </a>
                    <a href="#0" className="social">
                      <svg className="social__icon"></svg>
                      <span className="social__name">Codepen</span>
                    </a>
                    <a href="#0" className="social">
                      <svg className="social__icon"></svg>
                      <span className="social__name">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="teamy__content">
                <h3 className="teamy__name">Rosanna Pattie</h3>
                <span className="teamy__post">Illustrator</span>
              </div>
            </article>

            <article className="teamy teamy_style1 teamy_mask-circle teamy_zoom-slide-photo">
              <div className="teamy__layout">
                <div className="teamy__preview">
                  <img src="https://stas-melnikov.ru/cliparts/girl5_424x640.jpg" className="teamy__avatar" alt="The demo photo" />
                </div>
                <div className="teamy__back">
                  <div className="teamy__back-inner">
                    <a href="#0" className="social">
                      <svg className="social__icon"></svg>
                      <span className="social__name">Twitter</span>
                    </a>
                    <a href="#0" className="social">
                      <svg className="social__icon"></svg>
                      <span className="social__name">Codepen</span>
                    </a>
                    <a href="#0" className="social">
                      <svg className="social__icon"></svg>
                      <span className="social__name">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="teamy__content">
                <h3 className="teamy__name">Rose Alpha</h3>
                <span className="teamy__post">Photographer</span>
              </div>
            </article> */}

          </Row>
        </div>
      </section>
    );
  }

}

export default Founders;


{/* <section className="section">
  <div className="main-container">
    <header className="section__header">
      <h2 className="title section__title">Style 1</h2>
      <span className="section__hint">mask 1</span>
    </header>
    <div className="section__content teamy-team">
      <article className="teamy teamy_style1 teamy_mask-circle">
        <div className="teamy__layout">
          <div className="teamy__preview">
            <img src="https://stas-melnikov.ru/cliparts/girl2_424x640.jpg" className="teamy__avatar" alt="The demo photo" />
          </div>
          <div className="teamy__back">
            <div className="teamy__back-inner">
              <a href="#0" className="social">
                <svg className="social__icon"></svg>
                <span className="social__name">Twitter</span>
              </a>
              <a href="#0" className="social">
                <svg className="social__icon"></svg>
                <span className="social__name">Codepen</span>
              </a>
              <a href="#0" className="social">
                <svg className="social__icon"></svg>
                <span className="social__name">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="teamy__content">
          <h3 className="teamy__name">Suzan Lois</h3>
          <span className="teamy__post">Graphic Designer</span>
        </div>
      </article>
      <article className="teamy teamy_style1 teamy_mask-circle teamy_zoom-photo">
        <div className="teamy__layout">
          <div className="teamy__preview">
            <img src="https://stas-melnikov.ru/cliparts/girl3_424x640.jpg" className="teamy__avatar" alt="The demo photo" />
          </div>
          <div className="teamy__back">
            <div className="teamy__back-inner">
              <a href="#0" className="social">
                <svg className="social__icon"></svg>
                <span className="social__name">Twitter</span>
              </a>
              <a href="#0" className="social">
                <svg className="social__icon"></svg>
                <span className="social__name">Codepen</span>
              </a>
              <a href="#0" className="social">
                <svg className="social__icon"></svg>
                <span className="social__name">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="teamy__content">
          <h3 className="teamy__name">Dora Caelan</h3>
          <span className="teamy__post">HR-manager</span>
        </div>
      </article>
      <article className="teamy teamy_style1 teamy_mask-circle teamy_zoom-rotate-photo">
        <div className="teamy__layout">
          <div className="teamy__preview">
            <img src="https://stas-melnikov.ru/cliparts/girl4_424x640.jpg" className="teamy__avatar" alt="The demo photo" />
          </div>
          <div className="teamy__back">
            <div className="teamy__back-inner">
              <a href="#0" className="social">
                <svg className="social__icon"></svg>
                <span className="social__name">Twitter</span>
              </a>
              <a href="#0" className="social">
                <svg className="social__icon"></svg>
                <span className="social__name">Codepen</span>
              </a>
              <a href="#0" className="social">
                <svg className="social__icon"></svg>
                <span className="social__name">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="teamy__content">
          <h3 className="teamy__name">Rosanna Pattie</h3>
          <span className="teamy__post">Illustrator</span>
        </div>
      </article>
      <article className="teamy teamy_style1 teamy_mask-circle teamy_zoom-slide-photo">
        <div className="teamy__layout">
          <div className="teamy__preview">
            <img src="https://stas-melnikov.ru/cliparts/girl5_424x640.jpg" className="teamy__avatar" alt="The demo photo" />
          </div>
          <div className="teamy__back">
            <div className="teamy__back-inner">
              <a href="#0" className="social">
                <svg className="social__icon"></svg>
                <span className="social__name">Twitter</span>
              </a>
              <a href="#0" className="social">
                <svg className="social__icon"></svg>
                <span className="social__name">Codepen</span>
              </a>
              <a href="#0" className="social">
                <svg className="social__icon"></svg>
                <span className="social__name">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="teamy__content">
          <h3 className="teamy__name">Rose Alpha</h3>
          <span className="teamy__post">Photographer</span>
        </div>
      </article>
    </div>
  </div>
</section> */}
