import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import './CurrentListings.css';
import image1 from '../images/image1.JPG';
import image2 from '../images/image2.JPG';
import image3 from '../images/image3.JPG';
import image4 from '../images/image4.JPG';
import image5 from '../images/image5.JPG';

class CurrentListings extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div>
        <Slider id="autoPlay" className="auto-play" {...settings}>
          <div>
            <img href="#" src={image1} alt="" />
          </div>
          <div>
            <img href="#" src={image2} alt="" />
          </div>
          <div>
            <img href="#" src={image3} alt="" />
          </div>
          <div>
            <img href="#" src={image4} alt="" />
          </div>
          <div>
            <img href="#" src={image5} alt="" />
          </div>
        </Slider>
        <div>
          <button className="back-to-top">BACK TO TOP</button>
        </div>
      </div>
    );
  }
}

CurrentListings.propTypes = {
  currentListings: PropTypes.array,
  actions: PropTypes.object,
};

export default withRouter(CurrentListings);
