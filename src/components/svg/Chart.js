import React, { Component } from 'react'

import Headline from './shared/Headline'
import Standfirst from './shared/Standfirst'
import VerticalBarChart from './vertical-bar-chart/VerticalBarChart'
import HorizontalBarChart from './horizontal-bar-chart/HorizontalBarChart'

class Chart extends Component {

	render() {

		const graphicDimensions = {
			width: this.props.svgDimensions.width - this.props.margins.left - this.props.margins.yAxisWidth - this.props.margins.right,
			height: this.props.svgDimensions.height- this.props.margins.top - this.props.margins.headlineHeight - this.props.margins.standfirstHeight - this.props.margins.xAxisHeight - this.props.margins.bottom
		}

		const graphicMargins = {
			top: this.props.margins.top + this.props.margins.headlineHeight + this.props.margins.standfirstHeight,
			bottom: this.props.margins.bottom + this.props.margins.xAxisHeight,
			left: this.props.margins.left + this.props.margins.yAxisWidth,
			right: this.props.margins.right
		}

		let chart = null
		switch (this.props.chartType) {
			case "vertical-bar":
				chart = (<VerticalBarChart
							margins={graphicMargins}
							dimensions={graphicDimensions}
							data={this.props.data}
						/>)
				break

			case "horizontal-bar":
				chart = (<HorizontalBarChart
							margins={graphicMargins}
							dimensions={graphicDimensions}
							data={this.props.data}
						/>)
				break

			case "grouped-bar":
				chart = (<text transform={"translate(50,300)"}>
							This will be a grouped bar chart
						</text>)
				break

			case "stacked-bar":
				chart = (<text transform={"translate(50,300)"}>
							This will be a stacked bar chart
						</text>)
				break

			case "line":
				chart = (<text transform={"translate(50,300)"}>
							This will be a line chart
						</text>)
				break

			case "area":
				chart = (<text transform={"translate(50,300)"}>
							This will be an area bar chart
						</text>)
				break

			case "horizontal-proportion-bar":
				chart = (<text transform={"translate(50,300)"}>
							This will be a horizontal proportion bar chart
						</text>)
				break

			case "vertical-proportion-bar":
				chart = (<text transform={"translate(50,300)"}>
							This will be a vertical proportion bar chart
						</text>)
				break

			case "pie":
				chart = (<text transform={"translate(50,300)"}>
							This will be a horizontal bar chart
						</text>)
				break

			default:
				chart = null;
		}

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


				<Headline
					margins={this.props.margins}
					text={this.props.headline}
					onHeadlineHeightChange={(value) => this.props.onHeadlineHeightChange(value)}
				/>

				<Standfirst
					margins={this.props.margins}
					svgDimensions={this.props.svgDimensions}
					text={this.props.standfirst}
					onStandfirstHeightChange={(value) => this.props.onStandfirstHeightChange(value)}
				/>

				{chart}

			</svg>
		)
	}
}

export default Chart