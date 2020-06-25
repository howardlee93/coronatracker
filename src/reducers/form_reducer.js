// form_reducer.js



import {RECEIVE_AREA, RECEIVE_DATE} from '../actions/form_actions';


export const formReducer = (state = {}, action) => {

	Object.freeze(state);

	switch(action.type){


		case RECEIVE_AREA:
			return action.area;


		case RECEIVE_DATE:
			return action.date;


		default:
			return state;
	}
}