import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MonthlyInfo from '../MonthlyInfo/MonthlyInfo';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <Hero />
        <MonthlyInfo />
        <Footer />
      </div>
    );
  }
}

LandingPage.propTypes = {};

export default withRouter(LandingPage);
