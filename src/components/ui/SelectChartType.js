import React, { Component } from 'react'

class SelectChartType extends Component {
	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		const newChartType = this.props.chartType.map( elem => {
			if (e.target.value === elem.type) {
				return {...elem, active: true }
			} else {
				return {...elem, active: false }
			}
		})

		if (!newChartType.filter( elem => elem.active)[0].multiVariable) {
			this.props.onDependentVariablesChange(this.props.dependentVariables.slice(0,1))
		}

		this.props.onChartTypeChange(newChartType)
	}

	render() {
		const chartTypeRadios = this.props.chartType.map( (elem,i) => 
			<li key={`chartChoice1-${elem.type}`}>
				<label>
					<input
						type="radio"
						name="chartChoice"
						value={elem.type} 
						defaultChecked={elem.active}

						/>
						{`${elem.type.split("-").join(" ")} chart`}
				</label>
			</li>
		)

		return (
			<fieldset onChange={(e) => this.handleChange(e)}>
				<legend>Type of chart:</legend>
				<ul>
					{chartTypeRadios}
				</ul>
			</fieldset>
		)
	}
}

export default SelectChartType