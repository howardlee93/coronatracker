// area_reducer.js

import {RECEIVE_FILTERED} from '../actions/data_actions';


const dataReducer = (state = [], action) =>{
	Object.freeze(state);
	let newState;

	switch(action.type){

		case RECEIVE_FILTERED:
			newState = action.filtered;
			return Object.assign({}, state, newState);
		
		default:
			return state;

	}
};

export default dataReducer;
