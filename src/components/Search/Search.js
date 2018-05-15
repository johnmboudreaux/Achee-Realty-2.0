import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = ({
  address,
  citystatezip,
  radius,
  maxPrice,
  minBeds,
  minBaths,
  updateState,
  getListing,
}) => {
  return (
    <section className="title-form">
      <section className="hero-title">
        <h2>Find Your Dream Home</h2>
      </section>
      <section className="search-form-wrapper">
        <form id="search-form">
          <section className="form-group">
            <label className="label" htmlFor="address">
              Address
            </label>
            <input
              className="form-control"
              id="geo_search"
              name="geo_search"
              placeholder="City, State or Zip"
              type="text"
              onChange={updateState}
            />
          </section>
          <section className="form-group">
            <label className="label" htmlFor="search_radius">
              Radius
            </label>
            <select
              className="form-control"
              id="radius"
              name="search_radius"
              onChange={updateState}
            >
              <option value="1">1 mile</option>
              <option value="2">2 miles</option>
              <option value="5">5 miles</option>
              <option value="10">10 miles</option>
              <option value="20">20 miles</option>
              <option value="50">50 miles</option>
              <option value="100">100 miles</option>
            </select>
          </section>
          <section className="form-group">
            <label className="label" htmlFor="city_search">
              Max.Price
            </label>
            <input
              className="form-control"
              id="maxprice"
              name="max_price"
              placeholder="Max. Price"
              type="number"
              onChange={updateState}
            />
          </section>
          <section className="form-group">
            <label className="label" htmlFor="min_beds">
              Min. Beds
            </label>
            <select
              className="form-control"
              id="minbeds"
              name="min_beds"
              onChange={updateState}
            >
              <option value="">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </section>
          <section className="form-group">
            <label className="label" htmlFor="min_baths">
              Min. Baths
            </label>
            <select
              className="form-control"
              id="minbaths"
              name="min_baths"
              onChange={updateState}
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </section>
          <section className="form-group">
            <label className="label" htmlFor="form_submit">
              Get Started
            </label>
            <input
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                getListing();
              }}
            />
          </section>
        </form>
      </section>
    </section>
  );
};

Search.propTypes = {
  address: PropTypes.string,
  citystatezip: PropTypes.string,
  radius: PropTypes.number,
  maxPrice: PropTypes.number,
  minBeds: PropTypes.number,
  minBaths: PropTypes.number,
  updateState: PropTypes.func,
  getListing: PropTypes.func,
};

export default Search;
