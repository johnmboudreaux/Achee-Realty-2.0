import React from 'react';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './MonthlyInfo.css';

const MonthlyInfo = () => {
  return (
    <div className="monthly-blog">
      <div className="blog-title" id="">
        <header>5 Tips For Surviving A Move</header>
      </div>
      <div className="blog-contents">
        <div className="blog">
          MOVING. Just saying the word makes most people cringe. Here are a few tips to help you survive.<br />
          <p />
          <strong>1: START EARLY</strong><br />
          Organization is going to be your best friend here.As soon as you know it’ s
          happening line up the boxes, tape, markers and bubble wrap.Box up and label the items that
          aren’t necessary for your current day to day and put to the side.<br />
          <strong>2: DECLUTTER</strong><br />
          Ditch the excess or trim the fat, call it what you want. If you can live without it, ditch it!<br />
          <strong>3: FEED THE TROOPS</strong><br />
          Have a plan for feeding those precious people who have stepped up to help you
          conquer this mountain. Keep it simple and don’t forget a variety of drinks to stay hydrated.<br />
          <strong>4: IT TAKES A VILLAGE</strong><br />
          Make arrangements for the kids, two legged and four legged. If you don’t have to worry about keeping
          the kids occupied or keeping the dog from bolting every time the door opens your energy will stay
          focused on the move where it needs to be.<br />
          <p />
          So, there it is. A few suggestions for surviving a moving boot camp.
        </div>
        <div className="blog-image" />
      </div>
    </div>
  );
};

// MonthlyInfo.propTypes = {};

export default withRouter(MonthlyInfo);
