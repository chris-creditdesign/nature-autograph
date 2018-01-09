import React, { Component } from 'react'
import { format } from 'd3-format'

class YAxis extends Component {
	constructor(props) {
		super(props)

		this.checkYAxisWidth = this.checkYAxisWidth.bind(this)
	}

	checkYAxisWidth() {
		if(this.props.svgMargins.yAxisWidth !== this.labelGroup.getBBox().width) {
			this.props.onYAxisWidthChange(Math.round(this.labelGroup.getBBox().width))
		}
	}

	componentDidMount() {
		this.checkYAxisWidth()
	}

	componentDidUpdate() {
		this.checkYAxisWidth()
	}
	
	render() {
		const percentage = format(this.props.formatString)

		const dottedStyle = {
				stroke: "#000000",
				strokeWidth: 1,
				shapeRendering: "crispEdges",
				strokeDasharray: "2, 3"
		}

		const textStyle = {
			fontFamily: "NewsGothicMTOT-Regular",
			textAnchor: "end"
		}

		const ticks = this.props.yScale.ticks().map( (elem, i) => {
							return i === 0 ? 
								null : 
								(<line
									x1={-5}
									y1={this.props.yScale(elem)}
									x2={this.props.graphicDimensions.width}
									y2={this.props.yScale(elem)}
									style={dottedStyle}
									key={i}
								/>)
						})

		const labels = this.props.yScale.ticks().map( (elem, i) => 
						<text
							x={-10}
							y={this.props.yScale(elem)}
							dy={6}
							style={textStyle}
							key={i}
						>
							{percentage(elem)}
						</text>
					)

		return (
			<g className="yAxis">
				<g className="yTicks">
					{ticks}
				</g>
				<g className="yLabels"
					ref={group => this.labelGroup = group}>
					{labels}
				</g>
			</g>
		);
		
	}
}

export default YAxis