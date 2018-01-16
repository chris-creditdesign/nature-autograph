import React from 'react'

const GroupedBars = ({ thisVariable, thisIndex, xScale, yScale, xScaleInternal, xUnit, data, graphicDimensions }) => {

	const colours = [
		"#EA5153",
		"#75C6C5",
		"#5A527E",
		"#8B0D16",
		"#8FC297"	
	]

	const { height } = graphicDimensions

	const bars = (
		data.map(datum => 
			<rect
				key={datum[xUnit]}
				x={xScale(datum[xUnit]) - (xScale.bandwidth() / 2) + xScaleInternal(thisVariable)}
				y={yScale(datum[thisVariable])}
				height={height - yScale(datum[thisVariable])}
				width={xScaleInternal.bandwidth()}
				fill={colours[thisIndex]}
			/>
		)
	)

	return (
		<g>
			{bars}
		</g>
	)
}

export default GroupedBars