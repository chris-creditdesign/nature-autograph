import React, { Component } from 'react'

class AddDependentVariableButton extends Component {
	constructor(props) {
		super(props)

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
		e.preventDefault()

		const availableVariables = this.props.columnList.filter( (elem,i) => {
			if (i === this.props.independentVariableIndex) {
				return false
			} else if (this.props.dependentVariables.some(d => d === i)) {
				return false
			} else {
				return true
			}
		})

		if (availableVariables.length) {
			const newVariableIndex = this.props.columnList.indexOf(availableVariables[0])
			const newDependentVariables = [...this.props.dependentVariables, newVariableIndex]
			this.props.onDependentVariablesChange(newDependentVariables)
		}

	}

	render() {
		return (
			<button
				onClick={this.handleClick}>
				Add dependent variable
			</button>)
	}
}

export default AddDependentVariableButton