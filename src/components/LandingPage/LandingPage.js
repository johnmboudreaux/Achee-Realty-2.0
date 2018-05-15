import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as Actions from './Actions';
// import Slider from 'react-slick';
import './LandingPage.css';
import Search from '../Search/Search';
import CurrentListings from '../CurrentListings/CurrentListings';

class LandingPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      address: '',
      citystatezip: '',
      radius: 0,
      maxPrice: 0,
      minBeds: 0,
      minBaths: 0,
    };
    this.updateState = this.updateState.bind(this);
    this.getListing = this.getListing.bind(this);
  }

  getListing() {
    this.props.actions.loadCurrentListings(this.state.address, this.state.citystatezip);
  }

  updateState(event) {
    this.setState({
      address: event.target.value,
      citystatezip: event.target.value,
      radius: event.target.value,
      maxPrice: event.target.value,
      minBeds: event.target.value,
      minBaths: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="hero darken-overlay">
          <div className="hero-form-wrapper">
            <Search
              address={this.state.address}
              citystatezip={this.state.citystatezip}
              radius={this.state.radius}
              maxPrice={this.state.maxPrice}
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
LandingPage.propTypes = {
  loadCurrentListings: PropTypes.array,
  actions: PropTypes.object,
};

const mapStateToProps = (store, ownProps) => {
  return {
    currentListings: store.currentListings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
