import React, { Component } from 'react'

class Key extends Component {
	constructor(props) {
		super(props)

		this.checkKeyHeight = this.checkKeyHeight.bind(this)
		this.adjustKeyEntryPosition = this.adjustKeyEntryPosition.bind(this)
	}

	checkKeyHeight() {
		if (this.props.svgMargins.keyHeight !== this.groupElement.getBBox().height) {
			this.props.onKeyHeightChange(Math.round(this.groupElement.getBBox().height))
		}
	}

	adjustKeyEntryPosition() {
		let x = 0;
		let lineNumber = 0;

		let groups = this.groupElement.getElementsByClassName("keyEntry")
		let arrayOfGroups = Array.from(groups)

		arrayOfGroups.forEach( (elem, i) => {
			elem.setAttribute("transform", `translate(${x},${lineNumber * 20})`)
			if ((x + elem.getBBox().width) > this.props.graphicDimensions.width) {
				x = 0
				++lineNumber
				elem.setAttribute("transform", `translate(${x},${lineNumber * 20})`)
				x += (elem.getBBox().width + 15)
			} else {
				x += (elem.getBBox().width + 15)
			}
		})
	}

	componentDidMount() {
		this.adjustKeyEntryPosition()
		this.checkKeyHeight()
	}

	componentDidUpdate() {
		this.adjustKeyEntryPosition()
		this.checkKeyHeight()
	}

	render() {
		const colours = [
			"#EA5153",
			"#75C6C5",
			"#5A527E",
			"#8B0D16",
			"#8FC297"	
		]

		const standfirstStyle = {
			fontFamily: "NewsGothicMTOT-Regular"
		}

		const entries = this.props.dependentVariables.length > 1 ?
			this.props.dependentVariables.map( (elem, i) => 
				<g className={"keyEntry"}
					key={i}
				>
					<rect
						x={0}
						y={-10}
						width={10}
						height={10}
						fill={colours[i]} />
					<text
						x={18}
						y={0}
						style={standfirstStyle}>
							{this.props.columnList[elem]}
					</text>

				</g>

				) :
				null

		return (<g ref={group => this.groupElement = group}
					transform={`translate(${this.props.svgMargins.left},${this.props.svgMargins.top + this.props.svgMargins.headlineHeight + this.props.svgMargins.standfirstHeight + 10})`}>
					{entries}
				</g>)
	}
}

export default Key