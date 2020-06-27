import React  from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../actions/modal_actions';
import ChartContainer from './chart/chart_container';

import { fetchFilteredData } from '../actions/data_actions';


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
		<h1>HI</h1>
		</div>

		)

};


const mapStateToProps = state =>({
	modal: state.modal,
	area: state.form.area
});

const mapDispatchToProps = dispatch =>({
	closeModal: ()=> dispatch(closeModal()),
	fetchFilteredData: (area)=> dispatch(fetchFilteredData(area, null))
});


export default connect(mapStateToProps, mapDispatchToProps)(Modal);
