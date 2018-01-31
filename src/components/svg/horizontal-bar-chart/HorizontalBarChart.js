import React, { Component } from 'react'
import { scaleLinear, scaleBand } from 'd3-scale'
import Whitebox from '../shared/Whitebox'
import YAxis from './YAxis'
import Bars from './Bars'
import XAxis from './XAxis'
import Baseline from './Baseline'
import XAxisLegend from '../shared/XAxisLegend'
import YAxisLegend from '../shared/YAxisLegend'

class HorizontalBarChart extends Component {

	constructor(props) {
		super(props)

		this.xScale = scaleLinear()
		this.yScale = scaleBand()
	}

	render() {
		const xUnit = this.props.columnList[this.props.dependentVariables[0]]
		const yUnit = this.props.columnList[this.props.independentVariableIndex]

		this.xScale
			.domain([0, this.props.maxValue])
			.range([0, this.props.graphicDimensions.width])
			.nice()

		this.yScale
			.paddingInner(0.3)
			.paddingOuter(0.5)
			.align(0.9)
			.domain(this.props.data.map(d => d[yUnit]).reverse())
			.range([this.props.graphicDimensions.height, 0])

		return (
			<g transform={`translate(${this.props.graphicMargins.left},${this.props.graphicMargins.top})`}>
				<Whitebox
					graphicDimensions={this.props.graphicDimensions}
				/>

				<XAxis
					xScale={this.xScale}
					graphicDimensions={this.props.graphicDimensions}
					data={this.props.data}
					formatString={""}
					svgMargins={this.props.svgMargins}
					onXAxisHeightChange={(value) => this.props.onXAxisHeightChange(value)}
				/>

				<Bars
					yScale={this.yScale}
					xScale={this.xScale}
					yUnit={yUnit}
					xUnit={xUnit}
					data={this.props.data}
				/>

				<YAxis
					yScale={this.yScale}
					data={this.props.data}
					svgMargins={this.props.svgMargins}
					onYAxisWidthChange={(value) => this.props.onYAxisWidthChange(value)}
				/>

				<Baseline
					xScale={this.xScale}
					graphicDimensions={this.props.graphicDimensions}
				/>

				<XAxisLegend 
					graphicDimensions={this.props.graphicDimensions}
					graphicMargins={this.props.graphicMargins}
					svgMargins={this.props.svgMargins}
					xAxisLegend={this.props.xAxisLegend}
					onXAxisLegendHeightChange={(value) => this.props.onXAxisLegendHeightChange(value)}
				/>

				<YAxisLegend 
					graphicDimensions={this.props.graphicDimensions}
					graphicMargins={this.props.graphicMargins}
					svgMargins={this.props.svgMargins}
					yAxisLegend={this.props.yAxisLegend}
					onYAxisLegendWidthChange={(value) => this.props.onYAxisLegendWidthChange(value)}
				/>
			</g>

		)
	}

}

export default HorizontalBarChart