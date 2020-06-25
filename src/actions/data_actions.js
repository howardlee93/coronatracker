
// area_actions.js


import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL = 'RECEIVE_ALL';

export const RECEIVE_FILTERED = 'RECEIVE_FILTERED';




const receiveFiltered = filtered => ({
	type: RECEIVE_FILTERED,
	filtered
});


const receiveAll = all => ({
	type: RECEIVE_ALL,
	all

});


export const fetchGeneralData = () =>  dispatch => {
	return APIUtil.fetchGeneralData()
	.then(res => dispatch(receiveAll(res)))
}

export const fetchFilteredData = (area, date ) => dispatch => {

	if(!area && date){
		APIUtil.fetchDateData()
		.then(res => dispatch(receiveFiltered(res)))

	}else if(area && !date){
		APIUtil.fetchAreaData()
		.then(res => dispatch(receiveFiltered(res)))

	}else if (area && date){
		APIUtil.fetchHistoricAreaData()	
		.then(res => dispatch(receiveFiltered(res)))

	}


}