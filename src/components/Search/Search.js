import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './Actions';
import './Search.css';

class Search extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      streetAddress: '',
      citystatezip: '',
      // radius: 0,
      // maxPrice: 0,
      // minBeds: 0,
      // minBaths: 0,
    };
    this.updateState = this.updateState.bind(this);
    this.getListing = this.getListing.bind(this);
  }

  getListing() {
    this.props.actions.loadCurrentListings(
      this.state.streetAddress,
      this.state.citystatezip,
    );
  }

  updateState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <section className="title-form">
        <section className="hero-title">
          <h2>Find Your Dream Home</h2>
        </section>
        <section className="search-form-wrapper">
          <form className="search-form">
            <section className="form-group">
              <label className="label" htmlFor="streetAddress">
                Street Address
                <input
                  className="form-control"
                  id="geo_search"
                  name="streetAddress"
                  placeholder="Street Address"
                  onChange={this.updateState}
                  type="text"
                />
              </label>
            </section>
            <section className="form-group">
              <label className="label" htmlFor="citystatezip">
                City, State and Zip
                <input
                  className="form-control"
                  id="geo_search"
                  name="citystatezip"
                  placeholder="City, State, Zip"
                  onChange={this.updateState}
                  type="text"
                />
              </label>
            </section>
            {/* <section className="form-group">
              <label className="label" htmlFor="radius">
                Radius
                <select
                  className="form-control"
                  id="radius"
                  name="radius"
                  onChange={this.updateState}
                >
                  <option value="1">1 mile</option>
                  <option value="2">2 miles</option>
                  <option value="5">5 miles</option>
                  <option value="10">10 miles</option>
                  <option value="20">20 miles</option>
                  <option value="50">50 miles</option>
                  <option value="100">100 miles</option>
                </select>
              </label>
            </section> */}
            {/* <section className="form-group">
            <label className="label" htmlFor="city_search">
              Max.Price
            </label>
            <input
              className="form-control"
              id="maxprice"
              name="max_price"
              placeholder="Max. Price"
              type="number"
              onChange={this.updateState}
            />
          </section> */}
            {/* <section className="form-group">
              <label className="label" htmlFor="min_beds">
                Min. Beds
                <select
                  className="form-control"
                  id="minbeds"
                  name="min_beds"
                  onChange={this.updateState}
                >
                  <option value="">Any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
            </section>
            <section className="form-group">
              <label className="label" htmlFor="min_baths">
                Min. Baths
                <select
                  className="form-control"
                  id="minbaths"
                  name="min_baths"
                  onChange={this.updateState}
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </label>
            </section> */}
            <section className="form-group">
              <label className="label" htmlFor="form_submit">
                Get Started
                <input
                  type="submit"
                  name="form_submit"
                  onClick={(e) => {
                    e.preventDefault();
                    this.getListing();
                  }}
                />
              </label>
            </section>
          </form>
        </section>
      </section>
    );
  }
}

Search.propTypes = {
  actions: PropTypes.object,
  loadCurrentListings: PropTypes.func,
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
