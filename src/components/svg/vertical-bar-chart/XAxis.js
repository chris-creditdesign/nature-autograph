import React, { Component } from 'react'

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

	render() {
		const smallTickStyle = {
				stroke: "#000000",
				strokeWidth: 1,
				shapeRendering: "crispEdges",
				strokeDasharray: "none"
		}

		const textStyle = {
			fontFamily: "NewsGothicMTOT-Regular",
			textAnchor: "middle"
		}

		const ticks = this.props.data.map( datum => 
				<line
					key={datum.title}
					x1={this.props.xScale(datum.title) + (this.props.xScale.bandwidth() / 2)}
					y1={0}
					x2={this.props.xScale(datum.title) + (this.props.xScale.bandwidth() / 2)}
					y2={8}
					style={smallTickStyle}
				/>
			)

		const labels = this.props.data.map( datum => 
					<text
						key={datum.title}
						x={this.props.xScale(datum.title) + (this.props.xScale.bandwidth() / 2)}
						y={25}
						dy={0}
						style={textStyle}
					>
						{datum.title}
					</text>
				)

		return (
			<g className="xAxis" transform={`translate(${0},${this.props.graphicDimensions.height})`}>
				<g className="xTicks">
					{ticks}
				</g>
				<g	className="xLabels"
					ref={group => this.labelGroup = group}>
					{labels}
				</g>
			</g>
		)
	}
}

export default XAxis