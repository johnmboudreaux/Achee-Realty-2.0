import React, { Component } from 'react';
// import { Row, Col, Input, Container } from 'reactstrap';
import Slider from 'react-slick';
import image1 from '../images/image1.JPG';
import image2 from '../images/image2.JPG';
import image3 from '../images/image3.JPG';
import image4 from '../images/image4.JPG';
import image5 from '../images/image5.JPG';
import './SearchResults.css';

class SearchResults extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnHover: true,
    };
    return (
      <div>
        <div className="searched-slider">
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
        </div>
        <div>
          <p>
            ipsum
          </p>
        </div>
      </div>
    );
  }
}

export default SearchResults;