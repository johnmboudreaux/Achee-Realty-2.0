import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';
import './LandingPage.css';
import CurrentInfo from '../CurrentInfo/CurrentInfo';

class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <div className="hero darken-overlay">
          <div className="hero-form-wrapper">
            <section className="hero-title">
              <h2>Achee Realty Services</h2>
              <h3>Service Beyond The Sale</h3>
            </section>
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
        <CurrentInfo />
      </div>
    );
  }
}
LandingPage.propTypes = {};

export default withRouter(LandingPage);
