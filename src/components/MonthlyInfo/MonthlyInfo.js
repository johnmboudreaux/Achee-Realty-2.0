import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './MonthlyInfo.css';

const MonthlyInfo = () => {
  return (
    <div>
      <div className="blog-title" >
        <header>Maddies&apos;s Monthly Word Of Advice</header>
      </div>
      <div className="blog-contents">
        <div className="blog">
          Chickens Chickens Chickens Chickens Chickens Chickens Chickens Chickens
          Chickens Chickens Chickens Chickens Chickens Chickens Chickens Chickens
          Chickens Chickens Chickens Chickens Chickens Chickens Chickens Chickens
          Chickens Chickens Chickens Chickens Chickens Chickens Chickens Chickens
          Chickens Chickens Chickens Chickens Chickens Chickens Chickens Chickens
          Chickens Chickens Chickens Chickens Chickens Chickens Chickens Chickens
          Chickens Chickens Chickens Chickens Chickens Chickens Chickens Chickens
          Chickens Chickens Chickens Chickens Chickens Chickens Chickens Chickens
          Chickens Chickens Chickens Chickens Chickens Chickens Chickens Chickens
          Chickens Chickens Chickens Chickens Chickens Chickens Chickens Chickens
          Chickens Chickens Chickens Chickens Chickens Chickens Chickens Chickens
          Chickens Chickens Chickens Chickens Chickens Chickens Chickens Chickens
          Chickens Chickens Chickens Chickens Chickens Chickens Chickens Chickens
          Chickens Chickens Chickens Chickens Chickens Chickens Chickens Chickens
        </div>
        <div className="blog-image" />
      </div>
    </div>
  );
};

MonthlyInfo.propTypes = {};

export default withRouter(MonthlyInfo);
