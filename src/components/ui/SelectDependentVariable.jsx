import React, { Component } from 'react'

class SelectDependentVariable extends Component {
	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this)

	}


	handleChange(event) {

		const newIndex = this.props.columnList.indexOf(event.target.value)

		this.props.onDependentVariablesChange([newIndex])
	}

	render() {
		return	(<fieldset onChange={this.handleChange}>
				<legend>{`${this.props.legend}`}</legend>
				<select name={"text"}>
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