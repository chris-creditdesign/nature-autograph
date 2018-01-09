import Chart from '../svg/Chart'
import { connect } from 'react-redux'
import * as actions from '../../actions'

const mapStateToProps = (state, props) =>
	({
		headline: state.headline,
		standfirst: state.standfirst,
		xAxisLegend: state.xAxisLegend,
		yAxisLegend: state.yAxisLegend,
		chartType: state.chartType,
		data: state.data,
		svgMargins: state.svgMargins,
		svgDimensions: state.svgDimensions
	})

const mapDispatchToProps = (dispatch) =>
	({
		onHeadlineHeightChange(value) {
			dispatch(
				actions.changeHeadlineHeight(value)
			)
		},
		onStandfirstHeightChange(value) {
			dispatch(
				actions.changeStandfirstHeight(value)
			)
		},
		onYAxisWidthChange(value) {
			dispatch(
				actions.changeYAxisWidth(value)
			)
		},
		onXAxisHeightChange(value) {
			dispatch(
				actions.changeXAxisHeight(value)
			)
		},
		onXAxisLegendHeightChange(value) {
			dispatch(
				actions.changeXAxisLegendHeight(value)
			)
		},
		onYAxisLegendWidthChange(value) {
			dispatch(
				actions.changeYAxisLegendWidth(value)
			)
		}
	})

const ChartContainer = connect(mapStateToProps,mapDispatchToProps)(Chart)

export default ChartContainer