import React from 'react'
import TextInput from './TextInput'
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
		"pie"
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

	return (
		<div className="controls">

			<form>

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

				<fieldset onChange={(e) => props.onChartTypeChange(e.target.value)}>
					<legend>Type of chart:</legend>
					<ul>
						{chartTypeRadios}
					</ul>
				</fieldset>

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
				/>
			</div>

			<FilePreview
				data={props.data}
				fileName={props.fileName}
				columnList={props.columnList}
			/>

			<div>
				<DownloadChart />
			</div>

		</div>

	)

}

export default Controls