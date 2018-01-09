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
			.range([0, this.props.dimensions.width])

		this.yScale
			.domain([0, maxValue])
			.range([this.props.dimensions.height, 0])

		return (
			<g transform={`translate(${this.props.margins.left},${this.props.margins.top})`}>
				<text transform={`translate(50,150)`}>
					VerticalBarChart
				</text>

				<Whitebox 
					dimensions={this.props.dimensions}
				/>

				<YAxis
					yScale={this.yScale}
					dimensions={this.props.dimensions}
					formatString={""}
				/>

				<Bars
					yScale={this.yScale}
					xScale={this.xScale}
					data={this.props.data}
					dimensions={this.props.dimensions}
				/>

				<XAxis
					xScale={this.xScale}
					dimensions={this.props.dimensions}
					data={this.props.data}
				/>

				<Baseline
					yScale={this.yScale}
					dimensions={this.props.dimensions}
				/>
			</g>
		)
	}

}

export default VerticalBarChart