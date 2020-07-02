
import {connect} from 'react-redux';
import {receiveDate} from '../../actions/form_actions';
import {fetchFilteredData} from '../../actions/data_actions'

import DateLookup from './date';


const mapStateToProps = (state) =>{

	return {
		date: state.form.date,
		area: state.form.area
	}
}

const mapDispatchToProps = dispatch => ({

	receiveDate: date => dispatch(receiveDate(date)),
	fetchFilteredData: (area, date) => dispatch(fetchFilteredData(area, date)),

})

export default connect(mapStateToProps, mapDispatchToProps)(DateLookup);
