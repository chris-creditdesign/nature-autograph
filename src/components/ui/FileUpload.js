import React from 'react'
import ReactFileReader from 'react-file-reader'
import { csv } from 'd3-request'
import { range } from 'd3-array'


const FileUpload = ({ onDataChange, onFileNameChange, onColumnListChange, onDependentVariablesChange }) => {

	const handleFiles = files => {
		onFileNameChange(files.fileList[0].name)
		csv(files.base64, callBack)
	}

	const callBack = (error, data) => {
		if (error){
			throw error
		}

		onDataChange(data)
		onColumnListChange(data.columns)

		data.columns.length < 5 ?
			onDependentVariablesChange(range(1,data.columns.length)) :
			onDependentVariablesChange(range(1,6))
		
	}

	return (
		<ReactFileReader
			fileTypes={[".csv"]}
			base64={true}
			multipleFiles={false}
			handleFiles={handleFiles}
			>
			<button className="btn">Upload files</button>
		</ReactFileReader>
	)
}

export default FileUpload

