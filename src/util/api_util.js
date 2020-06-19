// api_util.js
import axios from 'axios';


const baseURL = 'https://covidtracking.com/api/v1/states';

const fetchAreaData = (area, date) => {
	return axios.get(baseURL, `${area}/${date}.json`)
	.then(response => console.log(responses))
	.catch(err => console.log(err));

};



const fetchDateData = date => {

}


