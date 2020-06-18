import React from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../actions/modal_action';


function Modal(modal, component){
	
	let component;


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
