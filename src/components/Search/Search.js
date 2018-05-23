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
    this.getPropertyDetails = this.getPropertyDetails.bind(this);
    this.getPropertyComps = this.getPropertyComps.bind(this);
  }

  getPropertyDetails() {
    this.props.actions.loadPropertyDetails(
      this.state.streetAddress,
      this.state.citystatezip,
    );
  }

  getPropertyComps() {
    this.props.actions.loadPropertyComps(
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
          </form>
          <section className="">
            <label className="label" htmlFor="form_submit">
              Get Property Info
              <input
                className="property-details"
                type="submit"
                name="form_submit"
                onClick={(e) => {
                  e.preventDefault();
                  this.getPropertyDetails();
                }}
              />
            </label>
          </section>
          <section className="">
            <label className="label" htmlFor="form_submit">
              Get Property Info
              <input
                className="property-comps"
                type="submit"
                name="form_submit"
                onClick={(e) => {
                  e.preventDefault();
                  this.getPropertyComps();
                }}
              />
            </label>
          </section>
          <section className="">
            <label className="label" htmlFor="form_submit">
              Get Property Info
              <input
                className="property-value"
                type="submit"
                name="form_submit"
                onClick={(e) => {
                  e.preventDefault();
                  this.getPropertyMonthlyPayments();
                }}
              />
            </label>
          </section>
        </section>
      </section>
    );
  }
}

Search.propTypes = {
  actions: PropTypes.object,
  loadPropertyDetails: PropTypes.func,
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
