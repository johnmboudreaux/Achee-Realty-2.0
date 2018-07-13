import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './MonthlyInfo.css';

const MonthlyInfo = () => {
  return (
    <div>
      <div className="blog-container">
        <div>
          <header className="blog-title">Cheryl&apos;s Tips</header>
        </div>
        <div>
          <article className="blog">
            ChickensChickens Chickens Chickens Chickens Chickens Chickens Chickens
            Chickens Chickens Chickens Chickens Chickens Chickens Chickens Chickens
            ChickensChickens Chickens Chickens ChickensChickens Chickens Chickens ChickensChickens
            Chickens Chickens Chickens Chickens Chickens Chickens ChickensChickensChickensChickens
            ChickensChickens Chickens Chickens Chickens Chickens ChickensChickens Chickens Chickens
            Chickens Chickens Chickens Chickens Chickens ChickensChickens Chickens Chickens Chickens
          </article>
        </div>
        <div>
          <aside className="blog-image">image goes here</aside>
        </div>
      </div>
    </div>
  );
};

MonthlyInfo.propTypes = {};

export default withRouter(MonthlyInfo);
