// mapContainer.js

import {connect} from 'react-redux';
import {fetchFilteredData} from '../../actions/data_actions'
import {receiveArea} from '../../actions/form_actions';
import{openModal} from '../../actions/modal_actions'

import Map from './map';


const mapStateToProps = state => ({
	area: state.form.area
});

const mapDispatchToProps = dispatch => ({
	fetchFilteredData: (area, date) => dispatch(fetchFilteredData(area, date)),
	receiveArea: (area) => dispatch(receiveArea(area)),
	openModal: modal => dispatch(openModal(modal))
});


export default connect(mapStateToProps, mapDispatchToProps)(Map);
