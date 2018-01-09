import React, { Component } from 'react'

class YAxisLegend extends Component {
	constructor(props) {
		super(props)

		this.checkYAxisLegendWidth = this.checkYAxisLegendWidth.bind(this)
	}

	checkYAxisLegendWidth() {
		if (this.props.svgMargins.yAxisLegendWidth !== this.textElement.getBBox().height) {
			this.props.onYAxisLegendWidthChange(Math.round(this.textElement.getBBox().height))
			
		}
	}

	componentDidMount() {
		this.checkYAxisLegendWidth()
	}

	componentDidUpdate() {
		this.checkYAxisLegendWidth()
	}

	render() {
		const textStyle = {
			fontFamily: "NewsGothicMTOT-Regular",
			textAnchor: "middle"
		}

		const x = this.props.svgMargins.left - this.props.graphicMargins.left + 10
		const y = this.props.graphicDimensions.height / 2

		return (
			<text
				ref = { text => this.textElement = text }
				transform={`translate(${x},${y}) rotate(-90 0,0)`}
				style={textStyle}
			>
				
				{this.props.yAxisLegend.split(/\r?\n/g).map((text, i) =>
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

export default YAxisLegend