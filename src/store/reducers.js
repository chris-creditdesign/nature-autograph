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

export const chartType = (state=initialState.chartType, action) =>
	action.type === C.SET_CHART_TYPE ?
		action.payload :
		state

export const data = (state=initialState.data, action) => 
	action.type === C.CHANGE_DATA ?
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

export const margins = (state=initialState.margins, action) =>
	action.type === C.CHANGE_MARGINS ?
		action.payload :
		state

export const svgDimensions = (state=initialState.svgDimensions, action) =>
	action.type === C.CHANGE_SVGDIMENSIONS ?
		action.payload :
		state

export const headlineHeight = (state=initialState.margins, action) =>
	action.type === C.CHANGE_HEADLINE_HEIGHT ?
		{	...state,
			headlineHeight: action.payload} :
		state

export const standfirstHeight = (state=initialState.margins, action) =>
	action.type === C.CHANGE_STANDFIRST_HEIGHT ?
		{	...state,
			standfirstHeight: action.payload} :
		state

export default combineReducers({
	headline,
	standfirst,
	chartType,
	data,
	source,
	footnote,
	errors,
	margins,
	svgDimensions
})