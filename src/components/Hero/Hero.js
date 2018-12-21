import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Hero.css';

const Hero = ({ clickOffMenuToClose }) => {
  const scrollToBottom = () => {
    document.querySelector('#blog-scroll').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div onClick={clickOffMenuToClose} className=" hero">
      <div className="darken-overlay">
        <Navbar />
        <section
          onKeyPress={scrollToBottom}
          role="button"
          tabIndex="0"
          onClick={scrollToBottom}
          id="hero-chevron"
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
};

export default Hero;
