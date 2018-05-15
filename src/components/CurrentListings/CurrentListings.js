import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import Slider from 'react-slick';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as Actions from './Actions';
import './CurrentListings.css';

class CurrentListings extends Component {
  render() {
    return (
      <div>
        NYello big world
      </div>
    );
  }
}

// CurrentListings.propTypes = {
//
// };
//
// const mapStateToProps = (store, ownProps) => {
//   return {
//     currentListings: store.currentListings,
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     actions: bindActionCreators(Actions, dispatch),
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(CurrentListings);

export default withRouter(CurrentListings);
