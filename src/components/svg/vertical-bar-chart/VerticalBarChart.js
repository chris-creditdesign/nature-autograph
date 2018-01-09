import React, { Component } from 'react'
import { scaleLinear, scaleBand } from 'd3-scale'
import Whitebox from '../shared/Whitebox'
import YAxis from './YAxis'
import Bars from './Bars'
import XAxis from './XAxis'
import Baseline from './Baseline'

class VerticalBarChart extends Component {

	constructor(props) {
		super(props)

		this.xScale = scaleBand()
		this.yScale = scaleLinear()
	}

	render() {
		const maxValue = Math.max(...this.props.data.map(d => d.value))

		this.xScale
			.padding(0.5)
			.domain(this.props.data.map(d => d.title))
			.range([0, this.props.graphicDimensions.width])

		this.yScale
			.domain([0, maxValue])
			.range([this.props.graphicDimensions.height, 0])

		return (
			<g transform={`translate(${this.props.graphicMargins.left},${this.props.graphicMargins.top})`}>

				<Whitebox 
					graphicDimensions={this.props.graphicDimensions}
				/>

				<YAxis
					yScale={this.yScale}
					graphicDimensions={this.props.graphicDimensions}
					svgMargins={this.props.svgMargins}
					formatString={""}
					onYAxisWidthChange={(value) => this.props.onYAxisWidthChange(value)}
				/>

				<Bars
					yScale={this.yScale}
					xScale={this.xScale}
					data={this.props.data}
					graphicDimensions={this.props.graphicDimensions}
				/>

				<XAxis
					xScale={this.xScale}
					graphicDimensions={this.props.graphicDimensions}
					data={this.props.data}
					svgMargins={this.props.svgMargins}
					onXAxisHeightChange={(value) => this.props.onXAxisHeightChange(value)}
				/>

				<Baseline
					yScale={this.yScale}
					graphicDimensions={this.props.graphicDimensions}
				/>
			</g>
		)
	}

}

export default VerticalBarChart