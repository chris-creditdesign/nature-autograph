import React from 'react'

const SelectIndependentVariable = ({ legend="Select Column", columnList }) => 
	(<fieldset>
		<legend>{`${legend}`}</legend>
		<select name={"text"}>
			{columnList.map( (elem, i) => {
				return (
					<option key={i}
						value={elem}>{elem}</option>
				)
			})}
		</select>
	</fieldset>)


export default SelectIndependentVariable