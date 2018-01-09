import React, { Component } from 'react'
import { scaleLinear, scaleBand } from 'd3-scale'
import Whitebox from '../shared/Whitebox'
import YAxis from './YAxis'
import Bars from './Bars'
import XAxis from './XAxis'
import Baseline from './Baseline'

class HorizontalBarChart extends Component {

	constructor(props) {
		super(props)

		this.xScale = scaleLinear()
		this.yScale = scaleBand()
	}

	render() {
		const maxValue = Math.max(...this.props.data.map(d => d.value))

		this.xScale
			.domain([0, maxValue])
			.range([0, this.props.dimensions.width])

		this.yScale
			.padding(0.5)
			.domain(this.props.data.map(d => d.title))
			.range([this.props.dimensions.height, 0])

		return (
			<g transform={`translate(${this.props.margins.left},${this.props.margins.top})`}>
				<Whitebox
					dimensions={this.props.dimensions}
				/>

				<XAxis
					xScale={this.xScale}
					dimensions={this.props.dimensions}
					data={this.props.data}
					formatString={""}
				/>

				<Bars
					yScale={this.yScale}
					xScale={this.xScale}
					margins={this.props.margins}
					data={this.props.data}
				/>

				<YAxis
					yScale={this.yScale}
					data={this.props.data}
				/>

				<Baseline
					xScale={this.xScale}
					dimensions={this.props.dimensions}
				/>
			</g>

		)
	}

}

export default HorizontalBarChart