import React from 'react'

const Baseline = ({ scales, margins, svgDimensions }) => {
	
	const { width } = svgDimensions
	const { yScale } = scales
	const { top, headlineHeight, left, right } = margins

	const solidStyle = {
			stroke: "#000000",
			strokeWidth: 3,
			shapeRendering: "crispEdges",
			strokeDasharray: "none"
	}

	return (
		<g className="baseline" transform={`translate(${left},${top + headlineHeight})`}>
			{ yScale.ticks().map( (elem, i) => {
					return i !== 0 ? 
						null : 
						(<line
							x1={-5}
							y1={yScale(elem)}
							x2={width - left - right}
							y2={yScale(elem)}
							style={solidStyle}
							key={i}
						/>)
				})}
		</g>
	)
}

export default Baseline