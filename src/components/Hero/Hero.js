import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import logoa from '../images/achee-logo (1).svg';
import Navbar from '../Navbar/Navbar';
import './Hero.css';

class Hero extends Component {
  onKeyPressHandler() {
    console.log('keypressed');
  }

  scrollToBottom() {
    console.log('scrollToBottom');
    document.querySelector('#footer').scrollIntoView({
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div className=" hero">
        <div className="darken-overlay">
          <Navbar />
          <section className="hero-title-a">
            <div>
              <h2>
                <span>
                  <img src={logoa} alt="fancy a" />
                </span>CHEE REALTY SERVICES
              </h2>
              <h3>“Service Beyond The Sale”</h3>
            </div>
          </section>
          <section
            onKeyPress={this.onKeyPressHandler}
            role="button"
            tabIndex="0"
            onClick={this.scrollToBottom}
            id="hero-chevron"
            className="demo"
          >
            <a>
              <span />
              <span />
              <span />
            </a>
          </section>
        </div>
      </div>
    );
  }
}

export default Hero;
