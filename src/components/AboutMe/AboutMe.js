import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import Navbar from '../Navbar/Navbar';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-wrapper">
      {/* <video id="grass-vid" autoPlay loop muted>
        <track kind="captions" />
        <source src="../images/sunrise-vid.mp4" type="video/mp4" />
        <source src="../images/sunrise-vid.webm" type="video/webm" />
      </video> */}
      <div className="container-fluid">
        <Row>
          <Navbar />
        </Row>
        <Row>
          <Col sm={8}>
            <div className="text-body">
              <div>
                <p>Hi, I&apos;m Cheryl</p>
                <p>I am the Real Estate Agent you have been looking for. Not only do I have a lifetime of experience with the Greater Baton Rouge and Acension parish areas, I have 15 years of experience selling and buying houses in and around them.</p>
                <p>I am ready to help guide you through all of the sure to be overwhelming choices and impossible to to decide sacrifices that will need to made over the course of buying or selling a home.</p>
                <p>I am a licensed agent as well as a broker, licensed and board certified by the state of Louisiana. With a proven track record like mine and the experience to overcome any obsticle put in front of me, I know I will be able to exceed all of your expectations.</p>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className="image" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default withRouter(AboutMe);
