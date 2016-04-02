import { combineReducers } from 'redux';
import usersReducer from './users.js';

const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;
