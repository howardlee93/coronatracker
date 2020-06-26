
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

export const fetchFilteredData = (area, date) => dispatch => {

	//maybe refactor later??
		if(!area && date){
			APIUtil.fetchDateData(date)
			.then(res => dispatch(receiveFiltered(res.data)))

		}else if(area && !date){
			APIUtil.fetchAreaData(area)
			.then(res => dispatch(receiveFiltered(res.data)))

		}else if (area && date){
			APIUtil.fetchHistoricAreaData(area, date)	
			.then(res => dispatch(receiveFiltered(res.data)))
		}

		// then(res => dispatch(receiveFiltered(res)));



}