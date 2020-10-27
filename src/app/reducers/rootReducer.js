import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
  homeReducer,
  movieReducer
});

export default rootReducer;
