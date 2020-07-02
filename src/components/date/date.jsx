import React, {useState} from 'react';


const styles ={

	input:{
		fontFamily:'sans-serif',
		padding:'15px'

	},

	button:{
		backgroundColor: 'black',
		color: 'white',
		margin:'5px',
 		boxShadow: 'none',
 		borderRadius: '5px',
 		fontSize:'18px',
 		border:'none'

	}
}

const DateLookup = (props) => {

	const [date, setDate] = useState("");


	function handleDateSubmit(e){
		e.preventDefault();

		console.log(date.replace(/-/g,""));

		let formatedDate = date.replace(/-/g,"");
		
		props.receiveDate(formatedDate);

		props.fetchFilteredData(props.area, formatedDate)
		
	}

	return(
		
		<form onSubmit={handleDateSubmit}>

			<input type='date' value={date} min="2020-01-01" onChange={e=>setDate(e.target.value) }/>
			<br/>
			<button style={styles.button} type="submit" >Change the date</button>

		</form>
		)
}

export default DateLookup;
