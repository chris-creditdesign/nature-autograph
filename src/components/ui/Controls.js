import React from 'react'
import TextInput from './TextInput'
import DownloadChart from './DownloadChart'

const Controls = (props) => {

	const charTypes = [
		"vertical-bar",
		"horizontal-bar",
		"grouped-bar",
		"stacked-bar",
		"line",
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
					defaultChecked={i === 0 ? true : false}

					/>
					{`${elem.split("-").join(" ")} chart`}
			</label>
		</li>
	)

	return (
		<div>

			<form>

				<TextInput 
					legend="Headline"
					defaultValue={props.headline}
					onChange={(e) => props.onHeadlineChange(e.target.value)}
				/>

				<TextInput 
					legend="Standfirst"
					defaultValue={props.standfirst}
					onChange={(e) => props.onStandfirstChange(e.target.value)}
				/>

				<fieldset>
					<legend>Type of chart:</legend>
					<ul>
						{chartTypeRadios}
					</ul>
				</fieldset>

			</form>

			<DownloadChart />
		</div>

	)

}

export default Controls