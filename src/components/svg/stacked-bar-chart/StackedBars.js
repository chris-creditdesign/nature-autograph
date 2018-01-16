import React from 'react'

const StackedBars = ({ yScale, xScale, data }) => {

	const colours = [
		"#EA5153",
		"#75C6C5",
		"#5A527E",
		"#8B0D16",
		"#8FC297"	
	]

	const bars = (
		data.map( (datum,i) =>
			<rect
				key={i}
				x={xScale(datum.data.title) - (xScale.bandwidth() / 2)}
				y={yScale(datum[1])}
				height={yScale(datum[0]) - yScale(datum[1])}
				width={xScale.bandwidth()}
				fill={colours[data.index]}
			/>
		)

	)

	return (
		<g>
			{bars}
		</g>
	)
}

export default StackedBars