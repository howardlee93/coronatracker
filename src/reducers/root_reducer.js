// root_reducer.js

import {combineReducers} from 'redux';

import modalReducer from './modal_reducer';

import dataReducer from './data_reducer';

export default combineReducers({
	data: dataReducer,
	modal: modalReducer
});

