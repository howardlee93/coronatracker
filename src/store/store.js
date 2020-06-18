// store.js

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import combineReducers from '../reducers/root_reducer';

const configureStore = () => {
  return createStore(combineReducers, applyMiddleware(thunk));
};

export default configureStore;


