import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <div id="footer">
          <div className="container">
            <div className="row">
              <section className="3u 6u(narrower) 12u$(mobilep)">
                <h3>Helpful Links</h3>
                <ul className="links">
                  <li>
                    <a href="https://usmortgagecalculator.org/" target="_blank">
                      Mortgage Calculator
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://calendar.google.com/calendar/r"
                      target="_blank"
                    >
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.mls.com/Home/Glossary.mvc"
                      target="_blank"
                    >
                      Real Estate Glossary
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.nerdwallet.com/mortgages/home-value"
                      target="_blank"
                    >
                      Home Value Estimater
                    </a>
                  </li>
                  <li>
                    <a href="https://www.houselogic.com/buy/" target="_blank">
                      Tips For Buying A Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.marketwatch.com/story/selling-your-home-this-spring-50-tips-to-sell-it-faster-and-at-a-better-price-2017-03-22"
                      target="_blank"
                    >
                      Tips For Selling Your Home
                    </a>
                  </li>
                  <li>
                    <a href="https://www.greatschools.org/" target="_blank">
                      School Ratings and Info
                    </a>
                  </li>
                </ul>
              </section>
              <section className="3u 6u$(narrower) 12u$(mobilep)">
                <h3>Things To Do?</h3>
                <ul className="links">
                  <li>
                    <a href="https://www.225batonrouge.com/" target="_blank">
                      Check Out 225
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://tourascension.com/attractions/featured-attractions/"
                      target="_blank"
                    >
                      Whats Happening in Ascension?
                    </a>
                  </li>
                  <li>
                    <a href="#">Rutrum accumsan sed</a>
                  </li>
                  <li>
                    <a href="#">Mattis et sed accumsan</a>
                  </li>
                  <li>
                    <a href="#">Duis neque nisi sed</a>
                  </li>
                  <li>
                    <a href="#">Sed et dapibus quis</a>
                  </li>
                  <li>
                    <a href="#">Rutrum amet varius</a>
                  </li>
                </ul>
              </section>
              <section className="6u 12u(narrower)">
                <h3>Get In Touch</h3>
                <form>
                  <div className="row 50%">
                    <div className="6u 12u(mobilep)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u(mobilep)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="row 50%">
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="5"
                      />
                    </div>
                  </div>
                  <div className="row 50%">
                    <div className="12u">
                      <ul className="actions">
                        <li>
                          <input
                            type="submit"
                            className="button alt"
                            value="Send Message"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>

          <ul className="icons">
            <li>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-google-plus">
                <span className="label">Google+</span>
              </a>
            </li>
          </ul>

          <div className="copyright">
            <ul className="menu">
              <li>&copy; Untitled. All rights reserved</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
