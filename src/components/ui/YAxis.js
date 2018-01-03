import React from 'react'
import { format } from 'd3-format'

const YAxis = ({ scales, margins, svgDimensions, formatString }) => {
	
	const { width } = svgDimensions
	const { yScale } = scales
	const { top, left, right } = margins
	const percentage = format(formatString)

	const dottedStyle = {
			stroke: "#000000",
			strokeWidth: 1,
			shapeRendering: "crispEdges",
			strokeDasharray: "2, 3"
	}

	const textStyle = {
		textAnchor: "end"
	}

	const ticks = yScale.ticks().map( (elem, i) => {
						return i === 0 ? 
							null : 
							(<line
								x1={-5}
								y1={yScale(elem)}
								x2={width - left - right}
								y2={yScale(elem)}
								style={dottedStyle}
								key={i}
							/>)
					})

	const text = yScale.ticks().map( (elem, i) => 
					<text
						x={-10}
						y={yScale(elem)}
						dy={6}
						style={textStyle}
						key={i}
					>
						{percentage(elem)}
					</text>
				)

	return (
		<g className="yAxis" transform={`translate(${left},${top})`}>
			<g className="yTicks">
				{ticks}
			</g>
			<g className="yLabels">
				{text}
			</g>
		</g>
	);
}

export default YAxis