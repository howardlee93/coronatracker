
// area_actions.js


import * as APIUtil from '../util/api_util';

export const RECEIVE_AREA = 'RECEIVE_AREA';

export const RECEIVE_DATE = 'RECEIVE_DATE';

export const RECEIVE_ALL = 'RECEIVE_ALL';

export const RECEIVE_FILTERED = 'RECEIVE_FILTERED';




const receiveFiltered = filtered => ({
	type: RECEIVE_FILTERED,
	filtered
})


const receiveDate = date =>({
	type: RECEIVE_DATE,
	date,
});


const receiveState = area => ({
	type: RECEIVE_AREA,
	area
});


const receiveAll = all => ({
	type: RECEIVE_ALL,
	all

});


export const fetchGeneralData = () =>  dispatch => {
	return APIUtil.fetchGeneralData()
	.then(res => dispatch(receiveAll(res)))
}

export const fetchFilteredData = (area, date ) => {

	if(!area && date){
		APIUtil.fetchDateData()
	}else if(area && !date){
		APIUtil.fetchAreaData()
	}else if (area && date){
		APIUtil.fetchHistoricAreaData()
	}

	.then(res => dispatch(receiveFiltered(res)))

}