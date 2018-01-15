import React, { Component } from 'react'

class Key extends Component {
	constructor(props) {
		super(props)

		this.checkKeyHeight = this.checkKeyHeight.bind(this)
		this.adjustKeyEntryPosition = this.adjustKeyEntryPosition.bind(this)
	}

	checkKeyHeight() {
		console.log()

		if (this.props.svgMargins.keyHeight !== this.textElement.getBBox().height) {
			this.props.onKeyHeightChange(Math.round(this.textElement.getBBox().height))
		}
	}

	adjustKeyEntryPosition() {
		let x = 0;
		let lineNumber = 0;

		let tspans = this.textElement.getElementsByClassName("keyEntry")
		let arrayOfTspans = Array.from(tspans)

		arrayOfTspans.forEach( (elem, i) => {
			elem.setAttribute("transform", `translate(${x},${lineNumber * 20})`)
			if ((x + elem.getBBox().width) > this.props.graphicDimensions.width) {
				x = 0
				++lineNumber
				elem.setAttribute("transform", `translate(${x},${lineNumber * 20})`)
				x += (elem.getBBox().width + 10)
			} else {
				x += (elem.getBBox().width + 10)
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

		const symbolStyle = {
			fontFamily: "sans-serif"
		}


		const entries = this.props.multiVariableChart ?
			this.props.dependentVariables.map( (elem, i) => 
				<g className={"keyEntry"}
					key={i}
				>
					<text
						x={0}
						y={1.5}
						style={symbolStyle}
						fill={colours[i]}>
						◼
					</text>
					<text
						x={20}
						y={0}
						style={standfirstStyle}>
							{this.props.columnList[elem]}
					</text>

				</g>

				) :
				null

		return (<g ref={text => this.textElement = text}
					transform={`translate(${this.props.svgMargins.left},${this.props.svgMargins.top + this.props.svgMargins.headlineHeight + this.props.svgMargins.standfirstHeight + 10})`}>
					{entries}
				</g>)
	}
}

export default Key