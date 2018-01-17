import React from 'react'
import TextInput from './TextInput'
import NumberInput from './NumberInput'
import DataInput from './DataInput'
import SelectDependentVariable from './SelectDependentVariable'
import AddDependentVariableButton from './AddDependentVariableButton'
import DownloadChart from './DownloadChart'
import FileUpload from './FileUpload'
import FilePreview from './FilePreview'


const Controls = (props) => {

	const charTypes = [
		"vertical-bar",
		"horizontal-bar",
		"line",
		"grouped-bar",
		"stacked-bar",
		"area",
		"horizontal-proportion-bar",
		"vertical-proportion-bar",
		"pie",
		"scatter-plot"
	]

	const chartTypeRadios = charTypes.map( (elem,i) => 
		<li key={`chartChoice1-${elem}`}>
			<label>
				<input
					type="radio"
					name="chartChoice"
					value={elem} 
					defaultChecked={elem === props.chartType ? true : false}

					/>
					{`${elem.split("-").join(" ")} chart`}
			</label>
		</li>
	)

	let multiVariableChart = true
	let addDependenVariableButton = null
	let selectDependentVariables = null

	switch(props.chartType) {
		case "vertical-bar" :
		case "horizontal-bar" :
			addDependenVariableButton = null
			multiVariableChart = false
			break

		default :
			multiVariableChart = true
			break
	}

	if ((props.dependentVariables.length < 5) && (props.dependentVariables.length < (props.columnList.length - 1))) {
		addDependenVariableButton = (
					<AddDependentVariableButton
						columnList={props.columnList}
						dependentVariables={props.dependentVariables}
						independentVariableIndex={props.independentVariableIndex}
						onAddDependentVariable={(value) => props.onAddDependentVariable(value)}
					/>
				)
	}

	selectDependentVariables = multiVariableChart ?
		props.dependentVariables.map( (elem,i) => 
					(<SelectDependentVariable 
						key={i}
						indexInArray={i}
						legend={`Select dependent variable ${i + 1}`}
						columnList={props.columnList}
						independentVariableIndex={props.independentVariableIndex}
						dependentVariables={props.dependentVariables}
						onDependentVariablesChange={(value) => props.onDependentVariablesChange(value)}
						onRemoveDependentVariable={(value) => props.onRemoveDependentVariable(value)}
					/>)
				) :
			<SelectDependentVariable 
						indexInArray={0}
						legend={`Select dependent variable`}
						columnList={props.columnList}
						independentVariableIndex={props.independentVariableIndex}
						dependentVariables={props.dependentVariables}
						onDependentVariablesChange={(value) => props.onDependentVariablesChange(value)}
						onRemoveDependentVariable={(value) => props.onRemoveDependentVariable(value)}
					/>

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
					defaultValue={props.svgDimensions.height}
					onChange={(e) => props.onSvgHeightChange(e.target.value)}
				/>

				<fieldset onChange={(e) => props.onChartTypeChange(e.target.value)}>
					<legend>Type of chart:</legend>
					<ul>
						{chartTypeRadios}
					</ul>
				</fieldset>

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