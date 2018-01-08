import React from 'react'

const Bars = ({ xScale, yScale, margins, data, svgDimensions }) => {

	const { height } = svgDimensions
	const { top, headlineHeight, standfirstHeight, bottom, left } = margins
	const graphicHeight = height - headlineHeight - standfirstHeight - bottom - top

	const bars = (
		data.map(datum => 
			<rect
				key={datum.title}
				x={xScale(datum.title)}
				y={yScale(datum.value)}
				height={graphicHeight - yScale(datum.value)}
				width={xScale.bandwidth()}
				fill={"#ea5153"}
			/>
		)
	)

	return (
		<g transform={`translate(${left},${top + headlineHeight + standfirstHeight})`}>
			{bars}
		</g>
	)
}

export default Bars