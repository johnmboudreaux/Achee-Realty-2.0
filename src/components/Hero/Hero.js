import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';
// import Slider from 'react-slick';
import './Hero.css';
import Search from '../Search/Search';
import CurrentListings from '../CurrentListings/CurrentListings';

class Hero extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      addressInputValue: '',
      radius: 0,
      maxPriceInputValue: 0,
      minBeds: 0,
      minBaths: 0,
    };
    // this.updateState = this.updateState.bind(this);
    this.getListing = this.getListing.bind(this);
  }

  getListing(address, citystatezip) {
    fetch(`/api/v1/search?address=${address}&citystatezip=${citystatezip}`)
      .then(response => response.json())
      .then(parsedResponse => console.log(parsedResponse))
      .catch(error => console.log(error));
  }

  // updateState(event) {
  //   this.setState({
  //     addressInputValue: event.target.value,
  //     radius: event.target.value,
  //     maxPriceInputValue: event.target.value,
  //     minBeds: event.target.value,
  //     minBaths: event.target.value,
  //   });
  // }

  render() {
    return (
      <div className="App">
        <div className="hero darken-overlay">
          <div className="hero-form-wrapper">
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

export default withRouter(Hero);
