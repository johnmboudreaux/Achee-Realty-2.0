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

  getPropertyDetails(address, citystatezip) {
    return fetch(
      `/api/v1/deepSearch?address=${address}&citystatezip=${citystatezip}`,
    )
      .then(results => results.json())
      .then(parsedResponse => parsedResponse)
      .then(listingData =>
        this.props.actions.loadPropertyDetails(
          listingData.response.results.result,
        ),
      )
      .catch(error => console.log(error));
  }

  getPropertyComps(dispatch, address, citystatezip) {
    // this.props.actions.loadPropertyComps(
    //   this.state.streetAddress,
    //   this.state.citystatezip,
    // );
    return fetch(
      `/api/v1/deepComps?address=${address}&citystatezip=${citystatezip}`,
    )
      .then(results => results.json())
      .then(parsedResponse => console.log(parsedResponse))
      .then(listingData =>
        dispatch(
          this.props.actions.loadPropertyDetailsSuccess(
            listingData.response.results.result,
          ),
        ),
      )
      .catch(error => console.log(error));
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
              Street Address
              <input
                className="form-control"
                id="geo_search"
                name="streetAddress"
                placeholder="Street Address"
                onChange={this.updateState}
                type="text"
              />
            </section>
            <section className="form-group">
              City, State and Zip
              <input
                className="form-control"
                id="geo_search"
                name="citystatezip"
                placeholder="City, State, Zip"
                onChange={this.updateState}
                type="text"
              />
            </section>
          </form>
          <section className="">
            <label className="label" htmlFor="form_submit">
              Get General Property Details
              <input
                className="property-details"
                type="submit"
                name="form_submit"
                onClick={(e) => {
                  e.preventDefault();
                  this.getPropertyDetails(this.state.streetAddress, this.state.citystatezip);
                }}
              />
            </label>
          </section>
          <section className="">
            <label className="label" htmlFor="form_submit">
              Get Property Comps
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
              Get Monthly Payments Info
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

const mapStateToProps = (store, ownProps) => ({
  propertyDetails: store.propertyDetails,
});


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
