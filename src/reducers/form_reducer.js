// form_reducer.js



import {RECEIVE_AREA, RECEIVE_DATE} from '../actions/form_actions';



const initialState = {
	area:'',
	date: ''
};


export const formReducer = (state = initialState, action) => {

	Object.freeze(state);
	let newState;


	switch(action.type){


		case RECEIVE_AREA:

			newState = action.area;

			return Object.assign( {}, state, {area: newState});


		case RECEIVE_DATE:

			newState = action.date;

			return  Object.assign( {}, state,{date: newState});


		default:
			return state;
	}
}