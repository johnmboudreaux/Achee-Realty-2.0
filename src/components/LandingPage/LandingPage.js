import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';
import logo from '../images/achee-logo.png';
// import Slider from 'react-slick';
import './LandingPage.css';
// import CurrentListings from '../CurrentListings/CurrentListings';
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
            {/* <li className="nav-links">
              <Link to="/Search">Find A Place To Call Home and Get The Details</Link>
            </li> */}
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
        <MonthlyInfo />
        {/* <div id="autoPlay">
          <CurrentListings />
        </div> */}
      </div>
    );
  }
}
LandingPage.propTypes = {};

export default withRouter(LandingPage);
