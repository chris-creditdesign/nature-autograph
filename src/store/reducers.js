import C from '../constants'
import initialState from '../initialState'
import { combineReducers } from 'redux'

export const headline = (state=initialState.headline, action) => 
	action.type === C.CHANGE_HEADLINE ?
		action.payload :
		state

export const standfirst = (state=initialState.standfirst, action) =>
	action.type === C.CHANGE_STANDFIRST ?
		action.payload :
		state

export const data = (state=initialState.data, action) => 
	action.type === C.CHANGE_DATA ?
		action.payload :
		state

export const fileName = (state=initialState.fileName, action) =>
	action.type === (C.CHANGE_FILE_NAME) ?
		action.payload :
		state

export const columnList = (state=initialState.columnList, action) =>
	action.type === (C.CHANGE_COLUMN_LIST) ?
		action.payload :
		state

export const independentVariableIndex = (state=initialState.independentVariableIndex, action) =>
	action.type === (C.CHANGE_INDEPENDENT_VARIABLE_INDEX) ?
		action.payload :
		state

export const dependentVariables = (state=initialState.dependentVariables, action) => {
	
	switch(action.type) {

		case C.CHANGE_DEPENDENT_VARIABLES :

			return action.payload

		case C.ADD_DEPENDENT_VARIABLE :

			return [
				...state,
				action.payload
			]

		case C.REMOVE_DEPENDENT_VARIABLE :

			return action.payload

		default :

			return state
	}
}

export const xAxisLegend = (state=initialState.xAxisLegend, action) => 
	action.type === C.CHANGE_XAXIS_LEGEND ?
		action.payload :
		state

export const yAxisLegend = (state=initialState.yAxisLegend, action) =>
	action.type === C.CHANGE_YAXIS_LEGEND ?
		action.payload :
		state

export const chartType = (state=initialState.chartType, action) =>
	action.type === C.CHANGE_CHART_TYPE ?
		action.payload :
		state

export const source = (state=initialState.source, action) => 
	action.type === C.CHANGE_SOURCE ?
		action.payload :
		state

export const footnote = (state=initialState.footnote, action) =>
	action.type === C.CHANGE_FOOTNOTE ?
		action.payload :
		state

export const errors = (state=[], action) => {

	switch(action.type) {

		case C.ADD_ERROR :

			return [
				...state,
				action.payload
			]

		case C.CLEAR_ERROR :

			return state.filter((elem, i) => elem !== action.payload )

		default :

			return state

	}

}

export const svgDimensions = (state=initialState.svgDimensions, action) =>
	action.type === C.CHANGE_SVG_DIMENSIONS ?
		action.payload :
		state

export const top = (state=50, action) =>
	action.type === C.CHANGE_SVG_MARGIN_TOP ?
		action.payload :
		state

export const bottom = (state=50, action) =>
	action.type === C.CHANGE_SVG_MARGIN_BOTTOM ?
		action.payload :
		state

export const left = (state=50, action) =>
	action.type === C.CHANGE_SVG_MARGIN_LEFT ?
		action.payload :
		state

export const right = (state=50, action) =>
	action.type === C.CHANGE_SVG_MARGIN_RIGHT ?
		action.payload :
		state

export const headlineHeight = (state=30, action) =>
	action.type === C.CHANGE_HEADLINE_HEIGHT ?
		action.payload :
		state

export const standfirstHeight = (state=36, action) => 
	action.type === C.CHANGE_STANDFIRST_HEIGHT ?
		action.payload :
		state

export const keyHeight = (state=30, action) =>
	action.type === C.CHANGE_KEY_HEIGHT ?
		action.payload :
		state

export const xAxisHeight = (state=36, action) => 
	action.type === C.CHANGE_XAXIS_HEIGHT ?
		action.payload :
		state

export const yAxisWidth = (state=30, action) =>
	action.type === C.CHANGE_YAXIS_WIDTH ?
		action.payload :
		state

export const yAxisLegendWidth = (state=30, action) =>
	action.type === C.CHANGE_YAXIS_LEGEND_WIDTH ?
		action.payload :
		state

export const xAxisLegendHeight = (state=30, action) => 
	action.type === C.CHANGE_XAXIS_LEGEND_HEIGHT ?
		action.payload :
		state

export default combineReducers({
	headline,
	standfirst,
	data,
	fileName,
	columnList,
	independentVariableIndex,
	dependentVariables,
	xAxisLegend,
	yAxisLegend,
	chartType,
	source,
	footnote,
	errors,
	svgMargins: combineReducers({
		top,
		bottom,
		left,
		right,
		headlineHeight,
		standfirstHeight,
		keyHeight,
		xAxisHeight,
		yAxisWidth,
		xAxisLegendHeight,
		yAxisLegendWidth
	}),
	svgDimensions
})