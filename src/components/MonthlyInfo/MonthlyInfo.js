import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './MonthlyInfo.css';

const MonthlyInfo = () => {
  return (
    <div>
      <div className="blog-title" >
        <header>Cheryl&apos;s Tips</header>
      </div>
      <div className="blog-contents">
        <div className="blog">
          ChickensChickens Chickens Chickens Chickens Chickens Chickens Chickens
          Chickens Chickens Chickens Chickens Chickens Chickens Chickens Chickens
          ChickensChickens Chickens Chickens ChickensChickens Chickens Chickens ChickensChickens
          Chickens Chickens Chickens Chickens Chickens Chickens ChickensChickensChickensChickens
          ChickensChickens Chickens Chickens Chickens Chickens ChickensChickens Chickens Chickens
          Chickens Chickens Chickens Chickens Chickens ChickensChickens Chickens Chickens Chickens
        </div>
        <div className="blog-image">
          image goes here
        </div>
      </div>
    </div>
  );
};

MonthlyInfo.propTypes = {};

export default withRouter(MonthlyInfo);
