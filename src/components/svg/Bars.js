import React from 'react'

const Bars = ({ scales, margins, data, svgDimensions }) => {

	const { height } = svgDimensions
	const { xScale, yScale } = scales
	const { top, bottom, left } = margins

	const bars = (
		data.map(datum => 
			<rect
				key={datum.title}
				x={xScale(datum.title)}
				y={yScale(datum.value)}
				height={height - bottom - top - yScale(datum.value)}
				width={xScale.bandwidth()}
				fill={"#ea5153"}
			/>
		)
	)

	return (
		<g transform={`translate(${top},${left})`}>
			{bars}
		</g>
	)
}

export default Bars