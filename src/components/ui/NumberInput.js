import React from 'react'

const NumberInput = ({ legend, value, step=10, min, onChange }) => 
	(<fieldset>
		<legend>{`${legend}:`}</legend>
			<input
				type="number"
				value={value}
				step={step}
				min={min}
				onChange={onChange}
			/>
	</fieldset>)

export default NumberInput