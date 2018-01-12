import React from 'react'
import { line } from 'd3-shape'

const Line = ({ thisIndex, xScale, yScale, xUnit, yUnit, data }) => {

	const colours = [
		"#EA5153",
		"#75C6C5",
		"#5A527E",
		"#8B0D16",
		"#8FC297"	
	]

	const path = line()
		.x( function(d) { return xScale(d[xUnit])})
		.y( function(d) { return yScale(d[yUnit])})

	const pathStyle = {
		fill: "none",
		stroke: colours[thisIndex],
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