import React, {useState} from 'react';
import {connect} from 'react-redux';


const DateLookup = () => {


	const [date, setDate] = useState("");



	//function to clean up date

	function dateFormater(input){

		let dateObject = new Date(date);

	}

	function handleDateSubmit(e){
		e.preventDefault();

	}


	return(
		<form onSubmit={handleDateSubmit}>

			<label> Look up the date </label>
			<input type='date' value={date} onChange={e=>setDate(e.target.value)}/>

		</form>
		)
}


export default DateLookup;

// const mapStateToProps = (state) =>{

// 	return {
// 		date: state.date
// 	}
// }

// const mapDispatchToProps = dispatch => ({

// 	fetchDateData: date => dispatch(fetchDateData(date))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(dateLookup);
