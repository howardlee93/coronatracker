// api_util.js
import axios from 'axios';


const baseURL = 'https://covidtracking.com/api/v1/states/';


// https://covidtracking.com/api/v1/states/

export const fetchHistoricAreaData = (area, date) => {
	return axios.get(baseURL + `${area}/${date}.json`)
	.then(response => console.log(response))
	.catch(err => console.log(err));

};



export const fetchDateData = date => {
	return axios.get(baseURL +`us/${date}.json`)
	.then(res => console.log(res))
	.catch(err => console.log(err));
	
}


export const fetchGeneralData = () => { // not sure if this is needed
	return axios.get(baseURL +'us/current.json')
	.then(response => console.log(response))
	.catch(err => console.log(err));

};

export const fetchAreaData = area => {
	return axios.get(baseURL +`${area}/current.json`)
	.then(res => console.log(res))
	.catch(err => console.log(err));
	
}

