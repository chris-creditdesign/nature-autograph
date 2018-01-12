import React, { Component } from 'react'

class SelectDependentVariable extends Component {
	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this)

	}

	handleChange(event) {

		const indexOfSelectedVariable = this.props.columnList.indexOf(event.target.value)

		const newDependentVariables = this.props.dependentVariables.slice()

		newDependentVariables.splice(this.props.indexInArray, 1, indexOfSelectedVariable)

		this.props.onDependentVariablesChange(newDependentVariables)
	}

	render() {
		const valueToDisplay = this.props.columnList[this.props.dependentVariables[this.props.indexInArray ]]
		
		return	(<fieldset>
				<legend>{`${this.props.legend}`}</legend>
				<select name={"text"} value={valueToDisplay} onChange={this.handleChange}>
					{this.props.columnList.map( (elem, i) => {
						if ( i === this.props.independentVariableIndex) {
							return null;
						} else {
							return (
								<option
									key={i}
									value={elem}>
									{elem}
								</option>
							)
						}
					})}
				</select>
			</fieldset>)
		
	}
}


export default SelectDependentVariable