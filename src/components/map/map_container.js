// mapContainer.js

import {connect} from 'react-redux';
import {fetchStateData} from '../../actions/data_actions'

import Map from './map';


const mapStateToProps = state => ({
	selectedState: state.area
});

const mapDispatchToProps = dispatch => ({
	fetchAreaData: (selected) => dispatch(fetchAreaData(selected))
});


export default connect(mapStateToProps, mapDispatchToProps)(Map);
