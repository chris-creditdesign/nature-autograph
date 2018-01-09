import React from 'react'

const Whitebox = ({graphicDimensions}) => {

	return (
		<rect
			className="svg-whitebox"
			width={graphicDimensions.width}
			height={graphicDimensions.height}
			fill={"#ffffff"}
			x={0}
			y={0} >
		</rect>
	)
}

export default Whitebox