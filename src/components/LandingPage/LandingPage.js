import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';
// import Slider from 'react-slick';
import './LandingPage.css';
import Search from '../Search/Search';
import CurrentListings from '../CurrentListings/CurrentListings';

class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <div className="hero darken-overlay">
          <div className="hero-form-wrapper">
            <section className="hero-title">
              <h2>Click Below To Start Your Search</h2>
            </section>
            <li className="nav-links">
              <Link to="/Search">Find A Place To Call Home</Link>
            </li>
            <section id="hero-chevron" className="demo">
              <Scrollchor
                to="autoPlay"
                onClick={this.scrolling}
                href="#scrolling-images"
              >
                <span />
                <span />
                <span />
              </Scrollchor>
            </section>
          </div>
        </div>
        <div id="autoPlay">
          <CurrentListings />
        </div>
      </div>
    );
  }
}
LandingPage.propTypes = {};

export default withRouter(LandingPage);
