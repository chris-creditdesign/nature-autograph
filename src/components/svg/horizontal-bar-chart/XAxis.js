import React from 'react'
import { format } from 'd3-format'

const XAxis = ({ xScale, graphicDimensions, data, formatString }) => {

	const { height } = graphicDimensions
	const percentage = format(formatString)

	const dottedStyle = {
			stroke: "#000000",
			strokeWidth: 1,
			shapeRendering: "crispEdges",
			strokeDasharray: "2, 3"
	}

	const textStyle = {
		fontFamily: "NewsGothicMTOT-Regular",
		textAnchor: "middle"
	}


	const ticks = xScale.ticks().map( (elem, i) => {
		return i === 0 ?
			null :
			(<line
				x1={xScale(elem)}
				y1={0}
				x2={xScale(elem)}
				y2={height + 8}
				style={dottedStyle}
				key={i}
			/>)
		})

	const labels = xScale.ticks().map( (elem, i) => 
			<text
				key={i}
				x={xScale(elem)}
				y={25}
				dy={0}
				style={textStyle}
			>
				{percentage(elem)}
			</text>
		)

	return (
		<g className="xAxis">
			<g className="xTicks">
				{ticks}
			</g>
			<g className="xLabels" transform={`translate(0,${height})`}>
				{labels}
			</g>
		</g>
	)

}

export default XAxis