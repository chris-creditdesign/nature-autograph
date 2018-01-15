import React, { Component } from 'react'

class SelectDependentVariable extends Component {
	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)

	}

	handleChange(event) {

		const indexOfSelectedVariable = this.props.columnList.indexOf(event.target.value)

		const newDependentVariables = this.props.dependentVariables.slice()

		newDependentVariables.splice(this.props.indexInArray, 1, indexOfSelectedVariable)

		this.props.onDependentVariablesChange(newDependentVariables)
	}

	handleClick(event) {
		event.preventDefault(event)

		const newDependentVariables = this.props.dependentVariables.slice()
		
		newDependentVariables.splice(this.props.indexInArray, 1)
		
		this.props.onRemoveDependentVariable(newDependentVariables)
	}

	render() {
		const valueToDisplay = this.props.columnList[this.props.dependentVariables[this.props.indexInArray]]
		
		return	(<fieldset>
				<legend>{`${this.props.legend}`}</legend>
				<select value={valueToDisplay} onChange={this.handleChange}>
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
				{this.props.indexInArray > 0 ?
					<button onClick={this.handleClick}>Remove</button> :
					null 
				}
				
			</fieldset>)
		
	}
}


export default SelectDependentVariable