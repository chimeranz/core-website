import React, { Component } from 'react';
import "./style.css";

class Process extends Component {

  render() {
    return (
      <section >
        <div className="main-container shrink">
          <div className="section-heading text-center">
            <header className="section__header">
              <h2>Our process</h2>
              <p className="section__hint">Our development structure</p>
            </header>

            <div className="row">
              <div className="container-fluid">
                <ul className="timeline timeline-horizontal">

                  <li className="timeline-item">
                    <div className="timeline-badge primary"><i className="glyphicon glyphicon-check"></i></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Design</h4>
                        <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
                      </div>
                      <div className="timeline-body">
                      </div>
                    </div>
                  </li>

                  <li className="timeline-item">
                    <div className="timeline-badge success"><i className="glyphicon glyphicon-check"></i></div>

                    <div className="timeline-panel bottom-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Development</h4>
                        <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
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
                        <h4 className="timeline-title">Modification</h4>
                        <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
                      </div>
                      <div className="timeline-body">
                      </div>
                    </div>
                  </li>

                  <li className="timeline-item">
                    <div className="timeline-badge danger"><i className="glyphicon glyphicon-check"></i></div>
                    <div className="timeline-panel bottom-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Deployment</h4>
                        <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
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
