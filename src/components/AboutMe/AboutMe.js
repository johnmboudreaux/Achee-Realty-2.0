import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-wrapper">
      <div className="container-fluid">
        <Row>
          <Col sm={8}>
            <div className="text-body" />
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
