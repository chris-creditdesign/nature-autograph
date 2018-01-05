import React from 'react'

const TextInput = ({ cols="60", rows="1", legend="Insert text", defaultValue="Text", onChange}) => 
	(<fieldset>
		<legend>{`${legend}:`}</legend>
		<textarea
			cols={cols}
			rows={rows}
			defaultValue={defaultValue}
			onChange={onChange}
		>
		</textarea>
	</fieldset>)


export default TextInput