import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import key from '../../keys/apiKey';
import './Hero.css';
import Search from '../Search/Search';

class Hero extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      addressInputValue: '',
      radius: '',
      maxPriceInputValue: '',
      minBeds: '',
      minBaths: '',
    };
    this.updateState = this.updateState.bind(this);
    this.getListing = this.getListing.bind(this);
  }

  getListing() {
    console.log('who dis');
    return fetch(
      `http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=${key}&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA`,
    )
      .then(response => response.json())
      .then(parsedResponse => console.log(parsedResponse));
  }

  updateState(event) {
    this.setState({
      addressInputValue: event.target.value,
      radius: event.target.value,
      maxPriceInputValue: event.target.value,
      minBeds: event.target.value,
      minBaths: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="hero darken-overlay">
          <div className="hero-form-wrapper">
            <section className="hero-image">
              <img src="assets/images/new-me1.png" alt="" />
            </section>
            <Search
              addressInputValue={this.state.addressInputValue}
              radius={this.state.radius}
              maxPriceInputValue={this.state.maxPriceInputValue}
              minBeds={this.state.minBeds}
              minBaths={this.state.minBaths}
              updateState={this.updateState}
              getListing={this.getListing}
            />
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
