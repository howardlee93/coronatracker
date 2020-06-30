import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../actions/modal_actions';
import ChartContainer from './chart/chart_container';
import DateLookupContainer from './date';


function Modal(props){

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
		<div className="modal" onClick={props.closeModal}>
		{component}
		<DateLookupContainer/>
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
