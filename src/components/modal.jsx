import React from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../actions/modal_actions';
import ChartContainer from './chart/chart_container';
import DateLookupContainer from './date/date_container';

function Modal(props){

	const button={
		backgroundColor: 'black',
		color: 'white',
		margin:'5px',
 		boxShadow: 'none',
 		borderRadius: '5px',
 		fontSize:'18px',
 		border:'none'

	}

	let component;

	if (!props.modal){
		return null;
	}

	if(props.modal === "chart"){
		component= <ChartContainer/>
	}else{
		return null;
	}
	
	return(
		<div className="modal">
			{component}
			<DateLookupContainer/>

			<button style={button} onClick={props.closeModal}>Close chart</button>

		</div>

		)
};


const mapStateToProps = state =>({
	modal: state.modal,
});

const mapDispatchToProps = dispatch =>({
	closeModal: ()=> dispatch(closeModal()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Modal);
