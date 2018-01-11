import React from 'react'

const Bars = ({ xScale, yScale, xUnit, yUnit, data }) => {

	const bars = (
		data.map(datum => 
			<rect
				key={datum[yUnit]}
				x={0}
				y={yScale(datum[yUnit]) - (yScale.bandwidth() / 2)}
				height={yScale.bandwidth()}
				width={xScale(datum[xUnit])}
				fill={"#ea5153"}
			/>
		)
	)

	return (
		<g >
			{bars}
		</g>
	)
}

export default Bars