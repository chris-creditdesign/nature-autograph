import C from '../constants'
import { combineReducers } from 'redux'

export const headline = (state="Headline", action) => 
	action.type === C.CHANGE_HEADLINE ?
		action.payload :
		state

export const standfirst = (state="Standfirst", action) =>
	action.type === C.CHANGE_STANDFIRST ?
		action.payload :
		state

export const chartType = (state="vertical-bar", action) =>
	action.type === C.SET_CHART_TYPE ?
		action.payload :
		state

export const data = (state={}, action) => 
	action.type === C.CHANGE_DATA ?
		action.payload :
		state

export const source = (state="Source", action) => 
	action.type === C.CHANGE_SOURCE ?
		action.payload :
		state


export const footnote = (state="Footnote", action) =>
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

export default combineReducers({
	headline,
	standfirst,
	chartType,
	data,
	source,
	footnote,
	errors
})