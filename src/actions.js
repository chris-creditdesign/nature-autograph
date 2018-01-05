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