// api_util.js
import axios from 'axios';


const baseURL = 'https://covidtracking.com/api/states';

const fetchStateData = (state) => {
	return axios.get(baseURL, `${state}`,)
	.then(response => response.[`${state}`] )
	.catch(err => console.log(err))
};



