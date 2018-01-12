import Controls from '../ui/Controls'
import { connect } from 'react-redux'
import * as actions from '../../actions'

const mapStateToProps = (state, props) =>
	({
		headline: state.headline,
		standfirst: state.standfirst,
		data: state.data,
		independentVariableIndex: state.independentVariableIndex,
		dependentVariables: state.dependentVariables,
		fileName: state.fileName,
		columnList: state.columnList,
		chartType: state.chartType,
		xAxisLegend: state.xAxisLegend,
		yAxisLegend: state.yAxisLegend
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
		},
		onDataChange(value) {
			dispatch(
				actions.changeData(value)
			)
		},
		onIndependentVariableIndexChange(value) {
			dispatch(
				actions.changeIndependentVariableIndex(value)
			)
		},
		onDependentVariablesChange(value) {
			dispatch(
				actions.changeDependentVariables(value)
			)
		},
		onAddDependentVariable(value) {
			dispatch(
				actions.addDependentVariable(value)
			)
		},
		onRemoveDependentVariable(value) {
			dispatch(
				actions.removeDependentVariable(value)
			)
		},
		onFileNameChange(value) {
			dispatch(
				actions.changeFileName(value)
			)
		},
		onColumnListChange(value) {
			dispatch(
				actions.changeColumnList(value)
			)
		},
		onChartTypeChange(value) {
			dispatch(
				actions.changeChartType(value)
			)
		},
		onXAxisLegendChange(value) {
			dispatch(
				actions.changeXAxisLegend(value)
			)
		},
		onYAxisLegendChange(value) {
			dispatch(
				actions.changeYAxisLegend(value)
			)
		}

	})

const ControlsContainer = connect(mapStateToProps, mapDispatchToProps)(Controls)

export default ControlsContainer

