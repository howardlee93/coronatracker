// chart_container.js
import {connect} from 'react-redux';

 
import { fetchFilteredData, fetchGeneralData } from '../../actions/data_actions'



import Chart from './chart';



const mapStateToProps = state => ({
	data: state.data,
	area: state.form.area,
	date: state.form.date
});


const mapDispatchToProps = dispatch => ({
	fetchFilteredData: (area, date) => dispatch(fetchFilteredData(area, date)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
