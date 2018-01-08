import Chart from '../svg/Chart'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) =>
	({
		headline: state.headline,
		standfirst: state.standfirst
	})

const ChartContainer = connect(mapStateToProps)(Chart)

export default ChartContainer