// chart_container.js
import {connect} from 'react-redux';
import {fetchCandidateData} from '../../actions/data_actions'



import Chart from './chart';



const mapStateToProps = state => ({
	data: state.data
});


const mapDispatchToProps = dispatch => ({
	fetchGeneralData: () => dispatch(fetchGeneralData()),
	
});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
