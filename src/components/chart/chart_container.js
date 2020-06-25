// chart_container.js
import {connect} from 'react-redux';
import { fetchFilteredData, fetchGeneralData } from '../../actions/data_actions'



import Chart from './chart';



const mapStateToProps = state => ({
	data: state.data
});

//action dont really need actions in this since this is to present data 

const mapDispatchToProps = dispatch => ({
	fetchGeneralData: () => dispatch(fetchGeneralData()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
