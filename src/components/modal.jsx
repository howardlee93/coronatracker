import React from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../actions/modal_actions';
import ChartContainer from './chart/chart';

		// component = <ChartContainer/>


function Modal(modal){
	
	let component;

	if (!modal){
		return null;
	}

	if(modal == "chart"){
		component= <h1> HI I AM A <ChartContainer/></h1>
	}else{
		return null;
	}



	return(
		<div onClick={closeModal}>
		{component}
		</div>

		)

};


const mapStateToProps = state =>({
	modal: state.modal
});

const mapDispatchToProps = dispatch =>({
	closeModal: ()=> dispatch(closeModal())
});


export default connect(mapStateToProps, mapDispatchToProps)(Modal);
