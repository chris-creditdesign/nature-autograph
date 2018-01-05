import React, { Component } from 'react'
import { scaleLinear, scaleBand } from 'd3-scale'

import YAxis from './YAxis'
import XAxis from './XAxis'
import Bars from './Bars'
import Baseline from './Baseline'
import { data } from '../../initialState'


class Chart extends Component {

	constructor(props) {
		super(props)
		this.xScale = scaleBand()
		this.yScale = scaleLinear()
	}

	render() {
		const margins = {top: 50, right: 50, bottom: 50, left: 50}
		const svgDimensions = {
			width: 800,
			height: 500
		}

		const maxValue = Math.max(...data.map(d => d.value))

		const xScale = this.xScale
			.padding(0.5)
			.domain(data.map(d => d.title))
			.range([0, svgDimensions.width - margins.left - margins.right])

		const yScale = this.yScale
			.domain([0, maxValue])
			.range([svgDimensions.height - margins.bottom - margins.top, 0])

		return (
			<svg id="svg-chart" width={svgDimensions.width} height={svgDimensions.height}>
				<rect
					className="svg-background"
					width={svgDimensions.width}
					height={svgDimensions.height}
					fill={"#f6f5ee"}
					x={0} y={0} >
				</rect>

				<rect
					className="svg-whitebox"
					width={svgDimensions.width - margins.right - margins.left}
					height={svgDimensions.height - margins.top - margins.bottom }
					fill={"#ffffff"}
					x={margins.right} y={margins.top} >
				</rect>

				<YAxis
					scales={{ xScale, yScale }}
					margins={margins}
					svgDimensions={svgDimensions}
					formatString={""}
				/>

				<Bars
					scales={{ xScale, yScale }}
					margins={margins}
					data={data}
					svgDimensions={svgDimensions}
				/>

				<XAxis
					scales={{ xScale, yScale }}
					margins={margins}
					svgDimensions={svgDimensions}
					data={data}
				/>

				<Baseline
					scales={{ xScale, yScale }}
					margins={margins}
					svgDimensions={svgDimensions}
				/>
			</svg>
		)
	}
}

export default Chart