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