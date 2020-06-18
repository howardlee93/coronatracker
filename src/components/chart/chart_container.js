// chart_container.js
import {connect} from 'react-redux';
import {fetchCandidateData} from '../../actions/data_actions'



import Chart from './chart';



const mapStateToProps = state => ({
	candidate: state.candidate
});


const mapDispatchToProps = dispatch => ({
	fetchCandidateData: (name) => dispatch(fetchCandidateData(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
