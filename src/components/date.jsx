import React, {useState} from 'react';
import {connect} from 'react-redux';


const DateLookup = () => {


	const [date, setDate] = useState("");



	//function to clean up date


	function handleDateSubmit(e){
		e.preventDefault();

		console.log(date.replace(/-/g,""));

		//props.updateDate(date.replace(/-/g,"")));
		
	}


	return(
		<form onSubmit={handleDateSubmit}>

			<input type='date' value={date} onChange={e=>setDate(e.target.value)}/>
			<br/>
			<button type="submit"> Look up the date </button>

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

// 	updateDate: date => dispatch(updateDate(date))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(dateLookup);
