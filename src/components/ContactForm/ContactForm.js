import React, { Component } from 'react';
import { Col, Input } from 'reactstrap';
import './ContactForm.css';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.updateState = this.updateState.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    console.log('nyello');
    return fetch('/api/v1/messageSent')
      .then(result => result.json())
      .then(parsedResponse => console.log(parsedResponse),
      );
  }

  updateState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <Col sm={6}>
        <div className="contact">
          <h3>Get In Touch</h3>
          <form>
            <div className="footer-contact-name">
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                autoComplete="name"
                onChange={this.updateState}
              />
            </div>
            <div className="footer-contact-email">
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                autoComplete="email"
                onChange={this.updateState}
              />
            </div>
            <div className="message-input">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="5"
                onChange={this.updateState}
              />
            </div>
            <input
              type="submit"
              className="button"
              value="Send Message"
              onClick={this.handleClick}
            />
          </form>
        </div>
      </Col>
    );
  }
}

export default ContactForm;
