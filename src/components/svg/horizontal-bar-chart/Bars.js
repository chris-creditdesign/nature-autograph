import React from 'react'

const Bars = ({ xScale, yScale, data }) => {

	const bars = (
		data.map(datum => 
			<rect
				key={datum.title}
				x={0}
				y={yScale(datum.title) - (yScale.bandwidth() / 2)}
				height={yScale.bandwidth()}
				width={xScale(datum.value)}
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