import Controls from '../ui/Controls'
import { connect } from 'react-redux'
import * as actions from '../../actions'

const mapStateToProps = (state, props) =>
	({
		headline: state.headline,
		standfirst: state.standfirst
	})

const mapDispatchToProps = (dispatch) =>
	({
		onHeadlineChange(value) {
			dispatch(
				actions.changeHeadline(value)
			)
		},
		onStandfirstChange(value) {
			dispatch(
				actions.changeStandfirst(value)
			)
		}
	})

const ControlsContainer = connect(mapStateToProps, mapDispatchToProps)(Controls)

export default ControlsContainer

