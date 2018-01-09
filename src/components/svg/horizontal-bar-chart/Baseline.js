import React from 'react'

const Baseline = ({ xScale, dimensions }) => {

	const { height } = dimensions

	const solidStyle = {
		stroke: "#000000",
		strokeWidth: 3,
		shapeRendering: "crispEdges",
		strokeDasharray: "none"
	}

	return (
		<g className="baseline">
			{xScale.ticks().map( (elem, i) => {
				return i !== 0 ?
					null :
					(<line
						x1={xScale(elem)}
						y1={0}
						x2={xScale(elem)}
						y2={height + 8}
						style={solidStyle}
						key={i}
					/>)
			})}
		</g>
	)
}

export default Baseline