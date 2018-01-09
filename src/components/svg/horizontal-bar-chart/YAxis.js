import React, { Component } from 'react'

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
		const smallTickStyle = {
				stroke: "#000000",
				strokeWidth: 1,
				shapeRendering: "crispEdges",
				strokeDasharray: "none"
		}

		const textStyle = {
			fontFamily: "NewsGothicMTOT-Regular",
			textAnchor: "end"
		}

		const ticks = this.props.data.map( datum => 
				<line
					key={datum.title}
					x1={0}
					y1={this.props.yScale(datum.title) + (this.props.yScale.bandwidth() / 2)}
					x2={-8}
					y2={this.props.yScale(datum.title) + (this.props.yScale.bandwidth() / 2)}
					style={smallTickStyle}
				/>
			)

		const labels = this.props.data.map( datum => 
				<text
					key={datum.title}
					x={-15}
					y={this.props.yScale(datum.title) + (this.props.yScale.bandwidth() / 2)}
					dy={"0.3em"}
					style={textStyle}
				>
					{datum.title}
				</text>
			)

		return (
			<g	className="yAxis">
				<g className="yTicks">
					{ticks}
				</g>
				<g className="yLabels"
					ref={group => this.labelGroup = group}>
					{labels}
				</g>
			</g>
		)
	}

}

export default YAxis