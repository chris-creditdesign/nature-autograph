import React from 'react'
import ReactFileReader from 'react-file-reader'
import { csv } from 'd3-request'

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
		onDependentVariablesChange([1])

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

