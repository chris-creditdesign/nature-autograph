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