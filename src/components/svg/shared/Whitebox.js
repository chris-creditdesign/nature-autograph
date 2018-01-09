import React from 'react'

const Whitebox = ({dimensions}) => {

	return (
		<rect
			className="svg-whitebox"
			width={dimensions.width}
			height={dimensions.height}
			fill={"#ffffff"}
			x={0}
			y={0} >
		</rect>
	)
}

export default Whitebox