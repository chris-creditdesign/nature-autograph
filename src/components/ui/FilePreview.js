import React from 'react'

const FilePreview = ({ data, fileName, columnList }) => {


	return (
		<div>
			<p>File name: <code>{fileName}</code></p>

			<p>Column names: <code>
				{columnList.map( (elem, index, array) => {
					if (index < (array.length - 1)) {
						return `${elem}, `
					} else {
						return `${elem}`
					}
				})}
				</code>
			</p>

			<p>First five entries: </p>

			<span> 
				{data.map( (datum, i) => {
					return i < 5 ?
						(<pre key={i}>
									{columnList.map( (column, index, array) =>{ 
										if (index < (array.length - 1)) {
											return `${datum[column]}, `
										} else {
											return datum[column]
										}
									})}
								</pre>) :
						null
					})}
			</span>
		</div>
	)
}

export default FilePreview