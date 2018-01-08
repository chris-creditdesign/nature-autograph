import React from 'react'

const Headline = ({ margins, text }) => {

	const headlineStyle = {
		textTransform: "uppercase",
		fontFamily: "Knockout-68FullFeatherwt",
		fontSize: 30,
		letterSpacing: 1
	}

	return (
		<text 
			x={margins.right}
			y={margins.top} 
			style={headlineStyle}>
			{text}
		</text>
	)

}

export default Headline