import React, { Component } from 'react'

class Headline extends Component {
	constructor(props) {
		super(props)

		this.checkHeadlineHeight = this.checkHeadlineHeight.bind(this)
	}

	checkHeadlineHeight() {
		if (this.props.margins.headlineHeight !== this.textElement.getBBox().height) {
			this.props.onHeadlineHeightChange(this.textElement.getBBox().height)
		}		
	}

	componentDidMount() {
		this.checkHeadlineHeight()
	}

	componentDidUpdate() {		
		this.checkHeadlineHeight()
	}

	render() {

		const headlineStyle = {
			textTransform: "uppercase",
			fontFamily: "Knockout-68FullFeatherwt",
			fontSize: 30,
			letterSpacing: 1
		}
		
		return (
			<text
				ref={text => this.textElement = text}
				x={this.props.margins.right}
				y={this.props.margins.top} 
				style={headlineStyle}>
				{this.props.text}
			</text>
		)
	}


}

export default Headline