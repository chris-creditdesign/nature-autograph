import React from 'react'
import { line } from 'd3-shape'

const Line = ({ xScale, yScale, data }) => {

	const path = line()
		.x( function(d) { return xScale(d.title)})
		.y( function(d) { return yScale(d.value)})

	const pathStyle = {
		fill: "none",
		stroke: "#ea5153",
		strokeWidth: 4,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}

	return (
		<g>
			<path d={path(data)}
				style={pathStyle} />	
		</g>
	)
}

export default Line