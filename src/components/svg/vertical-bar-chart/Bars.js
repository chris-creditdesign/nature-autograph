import React from 'react'

const Bars = ({ xScale, yScale, xUnit, yUnit, data, graphicDimensions }) => {

	const { height } = graphicDimensions

	const bars = (
		data.map(datum => 
			<rect
				key={datum[xUnit]}
				x={xScale(datum[xUnit]) - (xScale.bandwidth() / 2)}
				y={yScale(datum[yUnit])}
				height={height - yScale(datum[yUnit])}
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