import React, { Component } from 'react';
import "./style.css";

class Process extends Component {

  render() {
    return (
      <section id="process">
        <div className="main-container shrink">
          <div className="section-heading ">
            <header className="section__header">
              <h2>4 Stage Process</h2>
              <p className="section__hint">Our development structure</p>
            </header>

            <div className="row">
              <div className="container-fluid">
                <ul className="timeline timeline-horizontal">

                  <li className="timeline-item">
                    <div className="timeline-badge primary"><i className="glyphicon glyphicon-check"></i></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title text-center">Design</h4>
                        <p>
                          <small className="text-muted">
                            First we design and build
                            a mockup and work with you
                            untill your happy with it.
                          </small>
                        </p>
                      </div>
                      <div className="timeline-body">
                      </div>
                    </div>
                  </li>

                  <li className="timeline-item">
                    <div className="timeline-badge success"><i className="glyphicon glyphicon-check"></i></div>

                    <div className="timeline-panel bottom-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title text-center">Development</h4>
                        <p>
                          <small className="text-muted">
                            At this stage, our team will
                            work tirelessly to turn the design
                            into a fully functioning website.
                          </small>
                        </p>
                      </div>
                      <div className="timeline-body">
                        <p></p>
                      </div>
                    </div>
                  </li>


                  <li className="timeline-item">
                    <div className="timeline-badge info"><i className="glyphicon glyphicon-check"></i></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title text-center">Modification</h4>
                        <p>
                          <small className="text-muted">
                            Here we make changes to ensure
                            that the solution we
                            created is what you
                            wanted.
                          </small>
                        </p>
                      </div>
                      <div className="timeline-body">
                      </div>
                    </div>
                  </li>

                  <li className="timeline-item">
                    <div className="timeline-badge danger"><i className="glyphicon glyphicon-check"></i></div>
                    <div className="timeline-panel bottom-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title text-center">Deployment</h4>
                        <p>
                          <small className="text-muted">
                            Finally, once your happy with
                            the end result, we put the
                            website live onto the internet
                            for all your customers to see.
                          </small>
                        </p>
                      </div>
                      <div className="timeline-body">
                      </div>
                    </div>
                  </li>

                </ul>
				       </div>
				    </div>
			    </div>
        </div>
      </section>
    );
  }

}

export default Process;
