import React, { Component } from 'react'
import { scaleLinear, scaleBand } from 'd3-scale'
import Whitebox from '../shared/Whitebox'
import YAxis from '../shared/YAxis'
import Bars from './Bars'
import XAxis from '../shared/XAxis'
import Baseline from '../shared/Baseline'
import XAxisLegend from '../shared/XAxisLegend'
import YAxisLegend from '../shared/YAxisLegend'

class VerticalBarChart extends Component {

	constructor(props) {
		super(props)

		this.xScale = scaleBand()
		this.yScale = scaleLinear()
	}

	render() {
		const xUnit = this.props.columnList[this.props.independentVariableIndex]
		const yUnit = this.props.columnList[this.props.dependentVariables[0]]

		this.xScale
			.paddingInner(0.3)
			.paddingOuter(0.5)
			.align(0.7)
			.domain(this.props.data.map(d => d[xUnit]))
			.range([0, this.props.graphicDimensions.width])

		this.yScale
			.domain([0, this.props.maxValue])
			.range([this.props.graphicDimensions.height, 0])
			.nice()

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
					yUnit={yUnit}
					xUnit={xUnit}
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

export default VerticalBarChart