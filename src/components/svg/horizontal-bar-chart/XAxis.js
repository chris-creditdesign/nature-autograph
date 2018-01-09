import React, { Component } from 'react'
import { format } from 'd3-format'

class XAxis extends Component {
	constructor(props) {
		super(props)

		this.checkXAxisHeight = this.checkXAxisHeight.bind(this)
	}

	checkXAxisHeight() {
		if(this.props.svgMargins.xAxisHeight !== this.labelGroup.getBBox().height) {
			this.props.onXAxisHeightChange(Math.floor(this.labelGroup.getBBox().height))
		}
	}

	componentDidMount() {
		this.checkXAxisHeight()
	}

	componentDidUpdate() {
		this.checkXAxisHeight()
	}

	render () {
		const percentage = format(this.props.formatString)

		const dottedStyle = {
				stroke: "#000000",
				strokeWidth: 1,
				shapeRendering: "crispEdges",
				strokeDasharray: "2, 3"
		}

		const textStyle = {
			fontFamily: "NewsGothicMTOT-Regular",
			textAnchor: "middle"
		}


		const ticks = this.props.xScale.ticks().map( (elem, i) => {
			return i === 0 ?
				null :
				(<line
					x1={this.props.xScale(elem)}
					y1={0}
					x2={this.props.xScale(elem)}
					y2={this.props.graphicDimensions.height + 8}
					style={dottedStyle}
					key={i}
				/>)
			})

		const labels = this.props.xScale.ticks().map( (elem, i) => 
				<text
					key={i}
					x={this.props.xScale(elem)}
					y={25}
					dy={0}
					style={textStyle}
				>
					{percentage(elem)}
				</text>
			)

		return (
			<g className="xAxis">
				<g className="xTicks">
					{ticks}
				</g>
				<g	className="xLabels"
					transform={`translate(0,${this.props.graphicDimensions.height})`}
					ref={group => this.labelGroup = group}>
					{labels}
				</g>
			</g>
		)
		
	}


}

export default XAxis