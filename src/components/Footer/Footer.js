import React, { Component } from 'react';
import { Row, Col, Input } from 'reactstrap';
import ContactForm from '../ContactForm/ContactForm';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="container-fluid">
          <Row>
            <Col sm={3}>
              <div className="helpful-links">
                <h3>Helpful Links</h3>
                <ul className="links">
                  <li>
                    <a
                      href="https://usmortgagecalculator.org/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Mortgage Calculator
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://calendar.google.com/calendar/r"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.mls.com/Home/Glossary.mvc"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Real Estate Glossary
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.nerdwallet.com/mortgages/home-value"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Home Value Estimater
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.houselogic.com/buy/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Tips For Buying A Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.marketwatch.com/story/selling-your-home-this-spring-50-tips-to-sell-it-faster-and-at-a-better-price-2017-03-22"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Tips For Selling Your Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.greatschools.org/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      School Ratings and Info
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={3}>
              <div className="things-to-do">
                <h3>Things To Do?</h3>
                <ul className="links">
                  <li>
                    <a
                      href="https://www.225batonrouge.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Check Out 225
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://tourascension.com/attractions/featured-attractions/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Whats Happening in Ascension?
                    </a>
                  </li>
                  <li>
                    <a href="">Rutrum accumsan sed</a>
                  </li>
                  <li>
                    <a href="">Mattis et sed accumsan</a>
                  </li>
                  <li>
                    <a href="">Duis neque nisi sed</a>
                  </li>
                  <li>
                    <a href="">Sed et dapibus quis</a>
                  </li>
                  <li>
                    <a href="">Rutrum amet varius</a>
                  </li>
                </ul>
              </div>
            </Col>
            <ContactForm />
          </Row>
          <Row>
            <Col sm={12}>
              <div className="copyright">
                <ul className="menu">
                  <li>&copy; Untitled. All rights reserved</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Footer;
