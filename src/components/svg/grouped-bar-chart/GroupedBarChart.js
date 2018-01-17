import React, { Component } from 'react'
import { scaleLinear, scaleBand } from 'd3-scale'
import Whitebox from '../shared/Whitebox'
import YAxis from '../shared/YAxis'
import GroupedBars from './GroupedBars'
import XAxis from '../shared/XAxis'
import Baseline from '../shared/Baseline'
import XAxisLegend from '../shared/XAxisLegend'
import YAxisLegend from '../shared/YAxisLegend'

class GroupedBarChart extends Component {
	constructor(props) {
		super(props)

		this.xScale = scaleBand()
		this.xScaleInternal = scaleBand()
		this.yScale = scaleLinear()
	}

	render() {
		const xUnit = this.props.columnList[this.props.independentVariableIndex]
		
		let maxValueArray = []

		this.props.dependentVariables.map( (elem,i) => {
			maxValueArray.push(...this.props.data.map(d => d[this.props.columnList[elem]]))
			return null
		})

		let maxValue = Math.max(...maxValueArray)

		this.xScale
			.paddingInner(0.3)
			.paddingOuter(0.5)
			.align(0.7)
			.domain(this.props.data.map(d => d[xUnit]))
			.range([0, this.props.graphicDimensions.width])

		this.xScaleInternal
			.paddingInner(0.2)
			.paddingOuter(0)
			.domain(this.props.dependentVariables.map(d => this.props.columnList[d]))
			.range([0, this.xScale.bandwidth()])

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

				{this.props.dependentVariables.map( (elem,i) => 
					<GroupedBars
						key={i}
						thisIndex={i}
						thisVariable={this.props.columnList[elem]}
						yScale={this.yScale}
						xScale={this.xScale}
						xScaleInternal={this.xScaleInternal}
						xUnit={xUnit}
						data={this.props.data}
						graphicDimensions={this.props.graphicDimensions}
					/>
				)}

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

export default GroupedBarChart