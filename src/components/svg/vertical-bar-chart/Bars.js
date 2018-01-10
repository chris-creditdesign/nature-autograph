import React from 'react'

const Bars = ({ xScale, yScale, data, graphicDimensions }) => {

	const { height } = graphicDimensions

	const bars = (
		data.map(datum => 
			<rect
				key={datum.title}
				x={xScale(datum.title) - (xScale.bandwidth() / 2)}
				y={yScale(datum.value)}
				height={height - yScale(datum.value)}
				width={xScale.bandwidth()}
				fill={"#ea5153"}
			/>
		)
	)

	return (
		<g>
			{bars}
		</g>
	)
}

export default Bars