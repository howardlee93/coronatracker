// area_reducer.js

import {RECEIVE_ALL, RECEIVE_FILTERED} from '../actions/data_actions';

const dataReducer = (state = [], action) =>{
	Object.freeze(state);
	let newState;

	switch(action.type){

		case RECEIVE_ALL:
			newState = action.payload;
			return Object.assign({}, state, newState);


		case RECEIVE_FILTERED:
			newState = action.payload;
			return Object.assign({}, state, newState);
		
		default:
			return state;

	}
};

export default dataReducer;
