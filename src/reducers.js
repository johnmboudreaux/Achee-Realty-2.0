import { combineReducers } from 'redux';
import currentListings from './components/CurrentListings/Reducer';
import landingPage from './components/LandingPage/Reducer';

export default combineReducers({
  currentListings,
  landingPage,
});
