// api_util.js
import axios from 'axios';


const baseURL = 'https://covidtracking.com/api/v1/states/';


export const fetchHistoricAreaData = (area, date) => {
	return axios.get(baseURL + `${area}/${date}.json`)

};


export const fetchDateData = date => {
	return axios.get(baseURL +`us/${date}.json`)
	
	
}


export const fetchAreaData = area => {
	return axios.get(baseURL +`${area}/current.json`)
	
}

