
// area_actions.js

import * as APIUtil from '../util/api_util';

export const RECEIVE_AREA = 'RECEIVE_AREA';

export const RECEIVE_DATE = 'RECEIVE_DATE';


const receiveDate = date =>({
	type: RECEIVE_DATE,
	date,
});


const receiveState = area => ({
	type: RECEIVE_AREA,
	area
})