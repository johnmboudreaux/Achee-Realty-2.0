import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Hero.css';
import Search from '../Search/Search';
import key from '../../keys/apiKey';

class Hero extends Component {
  constructor() {
    super();
    this.getListing = this.getListing.bind(this);
  }
  getListing() {
    return fetch(
      `http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=${key}&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA`,
    )
      .then(response => response.json())
      .then(parsedResponse => console.log(parsedResponse));
  }

  render() {
    return (
      <div className="App">
        <div className="hero darken-overlay">
          <div className="hero-form-wrapper">
            <section className="hero-image">
              <img src="assets/images/new-me1.png" alt="" />
            </section>
            <Search />
            <section id="hero-chevron" className="demo">
              <a href="#scrolling-images">
                <span />
                <span />
                <span />
              </a>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Hero);
