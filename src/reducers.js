import { combineReducers } from 'redux';
import currentListings from './components/CurrentListings/Reducer';
import search from './components/Search/Reducer';

export default combineReducers({
  currentListings,
  search,
});
