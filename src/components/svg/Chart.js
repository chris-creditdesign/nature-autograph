import React, { Component } from 'react'

import Headline from './shared/Headline'
import Standfirst from './shared/Standfirst'
import VerticalBarChart from './vertical-bar-chart/VerticalBarChart'
import HorizontalBarChart from './horizontal-bar-chart/HorizontalBarChart'

class Chart extends Component {

	render() {

		const graphicMargins = {
			top: this.props.svgMargins.top + this.props.svgMargins.headlineHeight + this.props.svgMargins.standfirstHeight,
			bottom: this.props.svgMargins.bottom + this.props.svgMargins.xAxisHeight + 10,
			left: this.props.svgMargins.left + this.props.svgMargins.yAxisWidth + 10,
			right: this.props.svgMargins.right
		}

		const graphicDimensions = {
			width: this.props.svgDimensions.width - graphicMargins.left - graphicMargins.right,
			height: this.props.svgDimensions.height - graphicMargins.top - graphicMargins.bottom
		}

		let chart = null
		switch (this.props.chartType) {
			case "vertical-bar":
				chart = (<VerticalBarChart
							graphicMargins={graphicMargins}
							graphicDimensions={graphicDimensions}
							svgMargins={this.props.svgMargins}
							data={this.props.data}
							onYAxisWidthChange={(value) => this.props.onYAxisWidthChange(value)}
							onXAxisHeightChange={(value) => this.props.onXAxisHeightChange(value)}
						/>)
				break

			case "horizontal-bar":
				chart = (<HorizontalBarChart
							graphicMargins={graphicMargins}
							graphicDimensions={graphicDimensions}
							svgMargins={this.props.svgMargins}
							data={this.props.data}
							onYAxisWidthChange={(value) => this.props.onYAxisWidthChange(value)}
							onXAxisHeightChange={(value) => this.props.onXAxisHeightChange(value)}
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
					svgMargins={this.props.svgMargins}
					text={this.props.headline}
					onHeadlineHeightChange={(value) => this.props.onHeadlineHeightChange(value)}
				/>

				<Standfirst
					svgMargins={this.props.svgMargins}
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