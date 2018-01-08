import React from 'react'

const XAxis = ({ scales, margins, svgDimensions, data }) => {

	const { height } = svgDimensions
	const { xScale } = scales
	const { headlineHeight, left, bottom } = margins

	const smallTickStyle = {
			stroke: "#000000",
			strokeWidth: 1,
			shapeRendering: "crispEdges",
			strokeDasharray: "none"
	}

	const textStyle = {
		textAnchor: "middle"
	}

	const ticks = data.map( datum => 
			<line
				key={datum.title}
				x1={xScale(datum.title) + (xScale.bandwidth() / 2)}
				y1={0}
				x2={xScale(datum.title) + (xScale.bandwidth() / 2)}
				y2={8}
				style={smallTickStyle}
			/>
		)

	const labels = data.map( datum => 
				<text
					key={datum.title}
					x={xScale(datum.title) + (xScale.bandwidth() / 2)}
					y={25}
					dy={0}
					style={textStyle}
				>
					{datum.title}
				</text>
			)

	return (
		<g className="xAxis" transform={`translate(${left},${height + headlineHeight - bottom})`}>
			<g className="xTicks">
				{ticks}
			</g>
			<g className="xLabels">
				{labels}
			</g>
		</g>
	)
}

export default XAxis