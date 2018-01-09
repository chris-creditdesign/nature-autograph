import React from 'react'

const Baseline = ({ yScale, dimensions }) => {
	
	const { width } = dimensions

	const solidStyle = {
			stroke: "#000000",
			strokeWidth: 3,
			shapeRendering: "crispEdges",
			strokeDasharray: "none"
	}

	return (
		<g className="baseline">
			{ yScale.ticks().map( (elem, i) => {
					return i !== 0 ? 
						null : 
						(<line
							x1={-5}
							y1={yScale(elem)}
							x2={width}
							y2={yScale(elem)}
							style={solidStyle}
							key={i}
						/>)
				})}
		</g>
	)
}

export default Baseline