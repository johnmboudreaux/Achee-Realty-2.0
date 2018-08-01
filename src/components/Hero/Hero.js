import React from 'react';
import Scrollchor from 'react-scrollchor';
import logo from '../images/achee-logo (1).svg';
import Navbar from '../Navbar/Navbar';
import './Hero.css';

const Hero = () => {
  return (
    <div className=" hero">
      <div className="darken-overlay">
        <Navbar />
        {/* <section className="hero-title">
          <div>
            <h2>
              <span>
                <img src={logo} alt="fancy a" />
              </span>CHEE REALTY SERVICES
            </h2>
            <h3>“Service Beyond The Sale”</h3>
          </div>
        </section> */}
        <section id="hero-chevron" className="demo">
          <Scrollchor
            to="blog-title"
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
  );
};

export default Hero;
