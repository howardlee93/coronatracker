import React, {useState} from 'react';
import {connect} from 'react-redux';
import {receiveDate} from '../actions/form_actions';
import {fetchFilteredData} from '../actions/data_actions'

const DateLookup = (props) => {

	const [date, setDate] = useState("");


	function handleDateSubmit(e){
		e.preventDefault();

		console.log(date.replace(/-/g,""));

		let formatedDate = date.replace(/-/g,"");
		
		props.receiveDate(formatedDate);

		props.fetchFilteredData(props.area, formatedDate)
		.then(props.openModal("chart"));
		
	}


	return(
		<form onSubmit={handleDateSubmit}>

			<input type='date' value={date} onChange={e=>setDate(e.target.value)}/>
			<br/>
			<button type="submit"> Refine the data by date</button>

		</form>
		)
}



const mapStateToProps = (state) =>{

	return {
		date: state.form.date,
		area: state.form.area
	}
}

const mapDispatchToProps = dispatch => ({

	receiveDate: date => dispatch(receiveDate(date)),
	fetchFilteredData: (area, date) => dispatch(fetchFilteredData(area, date)),

})

export default connect(mapStateToProps, mapDispatchToProps)(DateLookup);
