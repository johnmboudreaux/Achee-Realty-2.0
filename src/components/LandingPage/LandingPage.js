import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MonthlyInfo from '../MonthlyInfo/MonthlyInfo';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import './LandingPage.css';

class LandingPage extends Component {
  constructor() {
    super();
    this.clickOffMenuToClose = this.clickOffMenuToClose.bind(this);
  }
  clickOffMenuToClose() {
    console.log('clickOff');
  }

  render() {
    return (
      <div className="landing-page">
        <Hero clickOffMenuToClose={this.clickOffMenuToClose} />
        <MonthlyInfo />
        <Footer />
      </div>);
  }
}

LandingPage.propTypes = {};

export default withRouter(LandingPage);
