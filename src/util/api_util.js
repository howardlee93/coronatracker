// api_util.js
import axios from 'axios';


const baseURL = 'https://covidtracking.com/api/v1/states';

const fetchHistoricAreaData = (area, date) => {
	return axios.get(baseURL, `${area}/${date}.json`)
	.then(response => console.log(responses))
	.catch(err => console.log(err));

};



const fetchDateData = date => {
	return axios.get(baseURL,`us/${date}.json`)
	.then(res => console.log(res))
	.catch(err => console.log(err));
	
}


const fetchGeneralData = () => {
	return axios.get(baseURL,'us/current.json')
	.then(response => console.log(responses))
	.catch(err => console.log(err));

};

const fetchAreaData = area => {
	return axios.get(baseURL,`${area}/current.json`)
	.then(res => console.log(res))
	.catch(err => console.log(err));
	
}
