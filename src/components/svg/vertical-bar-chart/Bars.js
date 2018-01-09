import React from 'react'

const Bars = ({ xScale, yScale, data, dimensions }) => {

	const { height } = dimensions

	const bars = (
		data.map(datum => 
			<rect
				key={datum.title}
				x={xScale(datum.title)}
				y={yScale(datum.value)}
				height={height - yScale(datum.value)}
				width={xScale.bandwidth()}
				fill={"#ea5153"}
			/>
		)
	)

	return (
		<g>
			{bars}
		</g>
	)
}

export default Bars