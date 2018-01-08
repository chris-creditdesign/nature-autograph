import React, { Component } from 'react'

class Headline extends Component {
	componentDidMount() {
		console.log("Headline height: " + this.textElement.getBBox().height)
	}

	componentDidUpdate() {
		console.log("Headline height: " + this.textElement.getBBox().height)		
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