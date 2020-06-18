import React from 'react';
import {connect} from 'react-redux';



function Modal(){
	


};


const mapStateToProps = state =>({
	modal: state.modal
});

const mapDispatchToProps = dispatch =>({
	closeModal: ()=> dispatch(closeModal)
});


export default connect(mapStateToProps, mapDispatchToProps)(Modal);
