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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const postBody = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    return fetch('/api/v1/messageReceived', {
      method: 'POST',
      body: JSON.stringify(postBody),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(result => result.json())
      .then((parsedResponse) => {
        return parsedResponse;
      })
      .catch(error => console.log(error))
      .then(parsedError => parsedError);
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
            <div className="contact-city">
              <input type="text" id="city" value="" placeholder="City" autoComplete="city" />
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
              className="form-button"
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
