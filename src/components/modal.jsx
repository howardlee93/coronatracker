import React from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../actions/modal_actions';
import ChartContainer from './chart/chart';



function Modal(modal){
	
	let component;

	if (!modal){
		return null;
	}

	if(modal == "chart"){
		component = <ChartContainer/>
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
