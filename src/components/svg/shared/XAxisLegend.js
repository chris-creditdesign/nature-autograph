import React, { Component } from 'react'

class XAxisLegend extends Component {
	constructor(props) {
		super(props)

		this.checkXAxisLegendHeight = this.checkXAxisLegendHeight.bind(this)
	}

	checkXAxisLegendHeight() {
		if (this.props.svgMargins.xAxisLegendHeight !== this.textElement.getBBox().height) {
			this.props.onXAxisLegendHeightChange(Math.round(this.textElement.getBBox().height))
		}
	}

	componentDidMount() {
		this.checkXAxisLegendHeight()
	}

	componentDidUpdate() {
		this.checkXAxisLegendHeight()
	}

	render() {

		const textStyle = {
			fontFamily: "NewsGothicMTOT-Regular",
			textAnchor: "middle"
		}

		const x = this.props.graphicDimensions.width / 2
		const y = this.props.graphicDimensions.height + 50

		return (
			<text
				ref = { text => this.textElement = text }
				transform={`translate(${x},${y})`}
				style={textStyle}
			>

				{this.props.xAxisLegend.split(/\r?\n/g).map((text, i) =>
					<tspan
						key={ i }
						x={ 0 }
						style={textStyle}
						y={ i * 20 }> 
						{ text }
					</tspan>
				)}
			</text>
		)
	}
}

export default XAxisLegend