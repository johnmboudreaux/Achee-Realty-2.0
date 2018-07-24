import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';
import logo from '../images/achee-logo (1).svg';
import './LandingPage.css';
import MonthlyInfo from '../MonthlyInfo/MonthlyInfo';

class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <div className="hero darken-overlay">
          <div className="hero-form-wrapper">
            <section className="hero-title">
              <h2><span><img src={logo} alt="fancy a" /></span>CHEE REALTY SERVICES</h2>
              <h3>“Service Beyond The Sale”</h3>
            </section>
            <section id="hero-chevron" className="demo">
              <Scrollchor
                to="blog-title"
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
        <MonthlyInfo />
      </div>
    );
  }
}
LandingPage.propTypes = {};

export default withRouter(LandingPage);
