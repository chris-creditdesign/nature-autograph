import React from 'react'
import { csvParse } from 'd3-dsv'

const DataInput = ({ data, columnList, onDataChange, onFileNameChange, onColumnListChange, onDependentVariablesChange }) => {

	const dataInput = e => {
		const newData = csvParse(e)

		onDataChange(newData)
		onColumnListChange(newData.columns)
		onDependentVariablesChange([1])
	}

	const dataToString = () => {

		const head = columnList.join(",")

		const body = [head]

		data.map( (datum, i) => {
			let holder = []
			columnList.map( (column,index,array) => {
				holder.push(datum[column])
				return null
			})
			body.push(holder.join(","))
			return null
		})

		return body.join("\n")
	}

	return (<fieldset>
				<legend>Enter your data:</legend>
				<textarea
					cols={60}
					rows={20}
					value={dataToString()}
					onChange={e => dataInput(e.target.value)}
				>
				</textarea>
			</fieldset>)
}

export default DataInput