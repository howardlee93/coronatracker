// form_actions.js

export const RECEIVE_AREA = 'RECEIVE_AREA';

export const RECEIVE_DATE = 'RECEIVE_DATE';





export const receiveDate = date =>({
	type: RECEIVE_DATE,
	date,
});


export const receiveArea = area => ({
	type: RECEIVE_AREA,
	area
});


