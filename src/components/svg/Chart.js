import React, { Component } from 'react'
import { scaleLinear, scaleBand } from 'd3-scale'

import Headline from './Headline'
import Standfirst from './Standfirst'
import YAxis from './YAxis'
import XAxis from './XAxis'
import Bars from './Bars'
import Baseline from './Baseline'


class Chart extends Component {

	constructor(props) {
		super(props)

		this.graphicWidth = props.svgDimensions.width
							- props.margins.right
							- props.margins.left

		this.graphicHeight = props.svgDimensions.height 
							- props.margins.top
							- props.margins.bottom 
							- props.margins.headlineHeight
							- props.margins.standfirstHeight

		this.maxValue = Math.max(...this.props.data.map(d => d.value))

		this.xScale = scaleBand()
		this.yScale = scaleLinear()

		this.xScale
			.padding(0.5)
			.domain(this.props.data.map(d => d.title))
			.range([0, this.graphicWidth])

		this.yScale
			.domain([0, this.maxValue])
			.range([this.graphicHeight, 0])

	}

	render() {

		return (
			<svg id="svg-chart"
				width={this.props.svgDimensions.width}
				height={this.props.svgDimensions.height}>

				<rect
					className="svg-background"
					width={this.props.svgDimensions.width}
					height={this.props.svgDimensions.height}
					fill={"#f6f5ee"}
					x={0} y={0} >
				</rect>

				<rect
					className="svg-whitebox"
					width={this.graphicWidth}
					height={this.graphicHeight}
					fill={"#ffffff"}
					x={this.props.margins.right}
					y={this.props.margins.top 
						+ this.props.margins.headlineHeight
						+ this.props.margins.standfirstHeight} >
				</rect>

				<Headline
					margins={this.props.margins}
					text={this.props.headline}
				/>

				<Standfirst
					margins={this.props.margins}
					svgDimensions={this.props.svgDimensions}
					text={this.props.standfirst}
				/>

				<YAxis
					yScale={this.yScale}
					margins={this.props.margins}
					headlineHeight={this.props.headlineHeight}
					standfirstHeight={this.props.standfirstHeight}
					svgDimensions={this.props.svgDimensions}
					formatString={""}
				/>

				<Bars
					yScale={this.yScale}
					xScale={this.xScale}
					margins={this.props.margins}
					data={this.props.data}
					svgDimensions={this.props.svgDimensions}
				/>

				<XAxis
					xScale={this.xScale}
					margins={this.props.margins}
					svgDimensions={this.props.svgDimensions}
					data={this.props.data}
				/>

				<Baseline
					yScale={this.yScale}
					xScale={this.xScale}
					margins={this.props.margins}
					svgDimensions={this.props.svgDimensions}
				/>
			</svg>
		)
	}
}

export default Chart