import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
      <div className="App">
        <div className="hero darken-overlay">
          <div className="hero-form-wrapper">
            <section className="hero-image">
              <img src="assets/images/new-me1.png" alt="" />
            </section>
            <section className="title-form">
              <section className="hero-title">
                <h2>Find Your Dream Home</h2>
              </section>
              <section className="search-form-wrapper">
                <form id="search-form" action="">
                  <section className="form-group">
                    <label className="label" htmlFor="address">
                      Address
                    </label>
                    <input
                      className="form-control"
                      id="geo_search"
                      name="geo_search"
                      value=""
                      placeholder="City, State or Zip"
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
                      // value={optionsState}
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
                      value=""
                      placeholder="Max. Price"
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
                    />
                  </section>
                </form>
              </section>
            </section>
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
