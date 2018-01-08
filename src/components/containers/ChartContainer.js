import Chart from '../svg/Chart'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) =>
	({
		headline: state.headline,
		standfirst: state.standfirst,
		data: state.data,
		margins: state.margins,
		svgDimensions: state.svgDimensions
	})

const ChartContainer = connect(mapStateToProps)(Chart)

export default ChartContainer