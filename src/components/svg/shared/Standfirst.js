import React, { Component } from 'react'

class Standfirst extends Component {
	constructor(props) {
		super(props)

		this.checkStandfirstHeight = this.checkStandfirstHeight.bind(this)
	}

	checkStandfirstHeight() {
		if (this.props.svgMargins.standfirstHeight !== this.textElement.getBBox().height) {
			this.props.onStandfirstHeightChange(Math.round(this.textElement.getBBox().height))
		}
	}

	componentDidMount() {
		this.checkStandfirstHeight()
	}

	componentDidUpdate() {
		this.checkStandfirstHeight()
	}

	render() {
		const standfirstStyle = {
			fontFamily: "NewsGothicMTOT-Regular"
		}

		return ( <text
					ref = { text => this.textElement = text }
					style = { standfirstStyle }>

					{this.props.text.split(/\r?\n/g).map((text, i) =>
						<tspan
							key = { i }
							x = { this.props.svgMargins.right }
							y = { this.props.svgMargins.top + this.props.svgMargins.headlineHeight + (i * 20) }> 
							{ text }
						</tspan>
					)} 
				</text>
			)
	}

}

export default Standfirst