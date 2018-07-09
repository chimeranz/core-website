import React, { Component } from 'react';
import * as emailjs from "emailjs-com";
import { HashLoader } from "react-spinners";
import "./style.css";

class ContactUs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      success: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    var form = new FormData(e.target);

    var template_params = {
       "reply_to": form.get("email"),
       "from_name": form.get("name"),
       "from_number": form.get("number"),
       "from_email": form.get("email"),
       "from_message": form.get("message")
    }

    var service_id = "default_service";
    var template_id = "template_WSHZEOfX";
    var user_id = "user_aiRr24yfkq1Zv4eCmJkNw";
    emailjs.send(service_id,template_id,template_params, user_id).then((res) => {
      console.log(res);
      this.setState({ loading: false, success: true });
    }).catch((err) => {
      this.setState({ loading: false, success: false });
      if(err) console.log(err);
    });
  }

  renderButton = () => {
    if(this.state.loading) {
      return(
        <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit"><HashLoader color={"fff"} loading={true} /></button>
      );
    }else if(this.state.success) {
      return(
        <button id="sendMessageButton" className="btn btn-success btn-xl text-uppercase" type="submit">Success</button>
      );
    }else {
      return(
        <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase">Send Message</button>
      );
    }
  }

  renderForm = () => {
    if(this.state.success) {
      return(
        <div>
          <h3 className="text-center">We have recieved your enquiry and will be in contact as soon as possible!</h3>
          <br />
          { this.renderButton() }
        </div>
      );
    }else {
      return(
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" onSubmit={this.handleSubmit} novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" name="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" name="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" name="number" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" name="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                {
                  this.renderButton()
                }
              </div>
            </div>
          </form>
        </div>
      );
    }
  }

  render() {
    return (
      <section className="contactUs whiteText" id="contactUs">
        <div className="main-container shrink">
          <div className="section-heading text-center">
            <header className="section__header">
              <h2>Contact Us</h2>
              <p className="section__hint">Get in touch with us</p>
            </header>

            <div className="section__content center">
              {
                this.renderForm()
              }
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default ContactUs;
