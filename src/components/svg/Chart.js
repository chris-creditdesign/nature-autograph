import React, { Component } from 'react'

import Headline from './shared/Headline'
import Standfirst from './shared/Standfirst'
import Key from './shared/Key'
import VerticalBarChart from './vertical-bar-chart/VerticalBarChart'
import HorizontalBarChart from './horizontal-bar-chart/HorizontalBarChart'
import LineChart from './line-chart/LineChart'
import StackedBarChart from './stacked-bar-chart/StackedBarChart'
import GroupedBarChart from './grouped-bar-chart/GroupedBarChart'
import CopyrightMark from './shared/CopyrightMark'
import getMaxValue from '../../helpers/getMaxValue'

class Chart extends Component {

	render() {

		const copyrightMarkDimensions = {
					width: 80,
					height: 15
				}
		
		const graphicMargins = {
					top: this.props.svgMargins.top + this.props.svgMargins.headlineHeight + this.props.svgMargins.standfirstHeight + this.props.svgMargins.keyHeight + 10,
					bottom: this.props.svgMargins.bottom + this.props.svgMargins.xAxisLegendHeight + this.props.svgMargins.xAxisHeight + copyrightMarkDimensions.height + 15,
					left: this.props.svgMargins.left + this.props.svgMargins.yAxisLegendWidth + this.props.svgMargins.yAxisWidth + 20,
					right: this.props.svgMargins.right
				}

		 const graphicDimensions = {
					width: this.props.svgDimensions.width - graphicMargins.left - graphicMargins.right,
					height: this.props.svgDimensions.height - graphicMargins.top - graphicMargins.bottom
				}

		const chartType = this.props.chartType.filter( chart => chart.active )[0]

		let maxValue = getMaxValue(this.props.dependentVariables, this.props.data, this.props.columnList, chartType)

		let chart = null

		switch (chartType.type) {
			case "vertical-bar":
				chart = (<VerticalBarChart
							graphicMargins={graphicMargins}
							graphicDimensions={graphicDimensions}
							data={this.props.data}
							columnList={this.props.columnList}
							independentVariableIndex={this.props.independentVariableIndex}
							dependentVariables={this.props.dependentVariables}
							maxValue={maxValue}
							svgMargins={this.props.svgMargins}
							onYAxisWidthChange={(value) => this.props.onYAxisWidthChange(value)}
							onXAxisHeightChange={(value) => this.props.onXAxisHeightChange(value)}
							xAxisLegend={this.props.xAxisLegend}
							yAxisLegend={this.props.yAxisLegend}
							onXAxisLegendHeightChange={(value) => this.props.onXAxisLegendHeightChange(value)}
							onYAxisLegendWidthChange={(value) => this.props.onYAxisLegendWidthChange(value)}
						/>)
				break

			case "horizontal-bar":
				chart = (<HorizontalBarChart
							graphicMargins={graphicMargins}
							graphicDimensions={graphicDimensions}
							data={this.props.data}
							columnList={this.props.columnList}
							independentVariableIndex={this.props.independentVariableIndex}
							dependentVariables={this.props.dependentVariables}
							maxValue={maxValue}
							svgMargins={this.props.svgMargins}
							onYAxisWidthChange={(value) => this.props.onYAxisWidthChange(value)}
							onXAxisHeightChange={(value) => this.props.onXAxisHeightChange(value)}
							xAxisLegend={this.props.xAxisLegend}
							yAxisLegend={this.props.yAxisLegend}
							onXAxisLegendHeightChange={(value) => this.props.onXAxisLegendHeightChange(value)}
							onYAxisLegendWidthChange={(value) => this.props.onYAxisLegendWidthChange(value)}
						/>)
				break

			case "line":
				chart = (<LineChart
							graphicMargins={graphicMargins}
							graphicDimensions={graphicDimensions}
							data={this.props.data}
							columnList={this.props.columnList}
							independentVariableIndex={this.props.independentVariableIndex}
							dependentVariables={this.props.dependentVariables}
							maxValue={maxValue}
							svgMargins={this.props.svgMargins}
							onYAxisWidthChange={(value) => this.props.onYAxisWidthChange(value)}
							onXAxisHeightChange={(value) => this.props.onXAxisHeightChange(value)}
							xAxisLegend={this.props.xAxisLegend}
							yAxisLegend={this.props.yAxisLegend}
							onXAxisLegendHeightChange={(value) => this.props.onXAxisLegendHeightChange(value)}
							onYAxisLegendWidthChange={(value) => this.props.onYAxisLegendWidthChange(value)}
						/>)
				break

			case "grouped-bar":
				chart = (<GroupedBarChart
							graphicMargins={graphicMargins}
							graphicDimensions={graphicDimensions}
							data={this.props.data}
							columnList={this.props.columnList}
							independentVariableIndex={this.props.independentVariableIndex}
							dependentVariables={this.props.dependentVariables}
							maxValue={maxValue}
							svgMargins={this.props.svgMargins}
							onYAxisWidthChange={(value) => this.props.onYAxisWidthChange(value)}
							onXAxisHeightChange={(value) => this.props.onXAxisHeightChange(value)}
							xAxisLegend={this.props.xAxisLegend}
							yAxisLegend={this.props.yAxisLegend}
							onXAxisLegendHeightChange={(value) => this.props.onXAxisLegendHeightChange(value)}
							onYAxisLegendWidthChange={(value) => this.props.onYAxisLegendWidthChange(value)}
						/>)
				break

			case "stacked-bar":
				chart = (<StackedBarChart
							graphicMargins={graphicMargins}
							graphicDimensions={graphicDimensions}
							data={this.props.data}
							columnList={this.props.columnList}
							independentVariableIndex={this.props.independentVariableIndex}
							dependentVariables={this.props.dependentVariables}
							maxValue={maxValue}
							svgMargins={this.props.svgMargins}
							onYAxisWidthChange={(value) => this.props.onYAxisWidthChange(value)}
							onXAxisHeightChange={(value) => this.props.onXAxisHeightChange(value)}
							xAxisLegend={this.props.xAxisLegend}
							yAxisLegend={this.props.yAxisLegend}
							onXAxisLegendHeightChange={(value) => this.props.onXAxisLegendHeightChange(value)}
							onYAxisLegendWidthChange={(value) => this.props.onYAxisLegendWidthChange(value)}
						/>)
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
							This will be a pie chart
						</text>)
				break

			case "scatter-plot":
				chart = (<text transform={"translate(50,300)"}>
							This will be a scratter plot chart
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

				<Key
					svgMargins={this.props.svgMargins}
					graphicDimensions={graphicDimensions}
					columnList={this.props.columnList}
					dependentVariables={this.props.dependentVariables}
					onKeyHeightChange={(value) => this.props.onKeyHeightChange(value)}
				/>

				<Standfirst
					svgMargins={this.props.svgMargins}
					text={this.props.standfirst}
					onStandfirstHeightChange={(value) => this.props.onStandfirstHeightChange(value)}
				/>

				{chart}

				<CopyrightMark
					x={this.props.svgDimensions.width - copyrightMarkDimensions.width - this.props.svgMargins.right}
					y={this.props.svgDimensions.height - copyrightMarkDimensions.height - this.props.svgMargins.left}
				/>

			</svg>
		)
	}
}

export default Chart