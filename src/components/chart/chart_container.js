// chart_container.js
import {connect} from 'react-redux';

import Chart from './chart';

const mapStateToProps = state => ({
	data: state.data,
	area: state.form.area,
	date: state.form.date
});


export default connect(mapStateToProps, null)(Chart);
