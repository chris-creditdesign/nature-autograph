import React from 'react'
import TextInput from './TextInput'
import NumberInput from './NumberInput'
import DataInput from './DataInput'
import SelectChartType from './SelectChartType'
import SelectDependentVariable from './SelectDependentVariable'
import AddDependentVariableButton from './AddDependentVariableButton'
import DownloadChart from './DownloadChart'
import FileUpload from './FileUpload'

const Controls = (props) => {

	const chartType = props.chartType.filter( chart => chart.active )[0]

	const addDependenVariableButton = chartType.multiVariable ?
		(props.dependentVariables.length < 5) ?
			(props.dependentVariables.length < (props.columnList.length - 1)) ?
					(<AddDependentVariableButton
						columnList={props.columnList}
						data={props.data}
						dependentVariables={props.dependentVariables}
						independentVariableIndex={props.independentVariableIndex}
						onDependentVariablesChange={(value) => props.onDependentVariablesChange(value)}
					/>)
				: null
			: null
		: null

	const selectDependentVariables = props.dependentVariables.map( (elem,i) => 
					(<SelectDependentVariable 
						key={i}
						indexInArray={i}
						legend={`Select dependent variable ${
							chartType.multiVariable ? i + 1 : ""}`}
						columnList={props.columnList}
						data={props.data}
						independentVariableIndex={props.independentVariableIndex}
						dependentVariables={props.dependentVariables}
						dependentVariableMaxValue={props.dependentVariableMaxValue}
						dependentScaleEnd={props.dependentScaleEnd}
						onDependentScaleEndChange={(value) => props.onDependentScaleEndChange(value)}
						onDependentVariablesChange={(value) => props.onDependentVariablesChange(value)}
					/>)
				)


	return (
		<div className="controls">

			<form>

				<DataInput
					data={props.data}
					columnList={props.columnList}
					onDataChange={(data) => props.onDataChange(data)}
					onFileNameChange={(name) => props.onFileNameChange(name)}
					onColumnListChange={(list) => props.onColumnListChange(list)}
					onDependentVariablesChange={(value) => props.onDependentVariablesChange(value)}
				/>

				<TextInput 
					legend="Headline"
					defaultValue={props.headline}
					onChange={(e) => props.onHeadlineChange(e.target.value)}
				/>

				<TextInput 
					legend="Standfirst"
					rows={5}
					defaultValue={props.standfirst}
					onChange={(e) => props.onStandfirstChange(e.target.value)}
				/>

				<NumberInput
					legend="Chart height"
					value={props.svgDimensions.height}
					min={300}
					onChange={(e) => props.onSvgHeightChange(parseInt(e.target.value, 10))}
				/>

				<SelectChartType
					chartType={props.chartType}
					dependentVariables={props.dependentVariables}
					onChartTypeChange={(value) => props.onChartTypeChange(value)}
					onDependentVariablesChange={(value) => props.onDependentVariablesChange(value)}
				/>
				
				{selectDependentVariables}

				{addDependenVariableButton}

				<TextInput 
					legend="X Axis legend (can be multi-line)"
					rows={2}
					defaultValue={props.xAxisLegend}
					onChange={(e) => props.onXAxisLegendChange(e.target.value)}
				/>

				<TextInput 
					legend="Y Axis legend (can be multi-line)"
					rows={2}
					defaultValue={props.yAxisLegend}
					onChange={(e) => props.onYAxisLegendChange(e.target.value)}
				/>

			</form>

			<div>
				<FileUpload 
					onDataChange={(data) => props.onDataChange(data)}
					onFileNameChange={(name) => props.onFileNameChange(name)}
					onColumnListChange={(list) => props.onColumnListChange(list)}
					onDependentVariablesChange={(value) => props.onDependentVariablesChange(value)}
				/>
			</div>

			<div>
				<DownloadChart />
			</div>

		</div>

	)

}

export default Controls