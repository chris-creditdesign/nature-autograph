import React from 'react'

const YAxis = ({ yScale, data }) => {

	const smallTickStyle = {
			stroke: "#000000",
			strokeWidth: 1,
			shapeRendering: "crispEdges",
			strokeDasharray: "none"
	}

	const textStyle = {
		fontFamily: "NewsGothicMTOT-Regular",
		textAnchor: "end"
	}

	const ticks = data.map( datum => 
			<line
				key={datum.title}
				x1={0}
				y1={yScale(datum.title) + (yScale.bandwidth() / 2)}
				x2={-8}
				y2={yScale(datum.title) + (yScale.bandwidth() / 2)}
				style={smallTickStyle}
			/>
		)

	const labels = data.map( datum => 
			<text
				key={datum.title}
				x={-15}
				y={yScale(datum.title) + (yScale.bandwidth() / 2)}
				dy={"0.3em"}
				style={textStyle}
			>
				{datum.title}
			</text>
		)

	return (
		<g	className="yAxis">
			<g className="yTicks">
				{ticks}
			</g>
			<g className="yLabels">
				{labels}
			</g>
		</g>
	)
}

export default YAxis