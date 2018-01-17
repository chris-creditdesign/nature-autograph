import React from 'react'

const NumberInput = ({ legend, defaultValue, step=10, min=350, onChange }) => 
	(<fieldset>
		<legend>{`${legend}:`}</legend>
			<input
				type="number"
				defaultValue={defaultValue}
				step={step}
				min={min}
				onChange={onChange}
			/>
	</fieldset>)

export default NumberInput