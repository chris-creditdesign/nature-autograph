import C from './constants'

export const changeHeadline = (headline="Headline") =>
	({
		type: C.CHANGE_HEADLINE,
		payload: headline
	})

export const changeStandfirst = (standfirst="Standfirst") =>
	({
		type: C.CHANGE_STANDFIRST,
		payload: standfirst
	})

export const changeData = (data=[]) =>
	({
		type: C.CHANGE_DATA,
		payload: data
	})

export const changeFileName = (name="No file uploaded") =>
	({
		type: C.CHANGE_FILE_NAME,
		payload: name
	})

export const changeColumnList = (list=[]) =>
	({
		type: C.CHANGE_COLUMN_LIST,
		payload: list
	})

export const changeIndependentVariableIndex = (index=0) =>
	({
		type: C.CHANGE_INDEPENDENT_VARIABLE_INDEX,
		payload: index
	})

export const changeDependentVariables = (list=[]) =>
	({
		type: C.CHANGE_DEPENDENT_VARIABLES,
		payload: list
	})

export const addDependentVariable = (list=[]) =>
	({
		type: C.ADD_DEPENDENT_VARIABLE,
		payload: list
	})

export const removeDependentVariable = (list=[]) =>
	({
		type: C.REMOVE_DEPENDENT_VARIABLE,
		payload: list
	})

export const changeChartType = (chartType="vertical-bar") =>
	({
		type: C.CHANGE_CHART_TYPE,
		payload: chartType
	})

export const changeHeadlineHeight = (headlineHeight=30) =>
	({
		type: C.CHANGE_HEADLINE_HEIGHT,
		payload: headlineHeight
	})

export const changeStandfirstHeight = (standfirstHeight=36) =>
	({
		type: C.CHANGE_STANDFIRST_HEIGHT,
		payload: standfirstHeight
	})

export const changeYAxisWidth = (yAxisWidth=30) =>
	({
		type: C.CHANGE_YAXIS_WIDTH,
		payload: yAxisWidth
	})

export const changeXAxisHeight = (xAxisHeight=36) =>
	({
		type: C.CHANGE_XAXIS_HEIGHT,
		payload: xAxisHeight
	})

export const changeXAxisLegend = (xAxisLegend="X Axis Legend") =>
	({
		type: C.CHANGE_XAXIS_LEGEND,
		payload: xAxisLegend
	})

export const changeYAxisLegend = (yAxisLegend="Y Axis Legend") =>
	({
		type: C.CHANGE_YAXIS_LEGEND,
		payload: yAxisLegend
	})

export const changeXAxisLegendHeight = (xAxisLegendHeight=30) =>
	({
		type: C.CHANGE_XAXIS_LEGEND_HEIGHT,
		payload: xAxisLegendHeight
	})

export const changeYAxisLegendWidth = (yAxisLegendWidth=30) =>
	({
		type: C.CHANGE_YAXIS_LEGEND_WIDTH,
		payload: yAxisLegendWidth
	})

















