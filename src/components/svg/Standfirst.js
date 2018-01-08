import React, { Component } from 'react'

class Standfirst extends Component {
	componentDidMount() {
		console.log("Standfirst height: " + this.textElement.getBBox().height)
	}

	componentDidUpdate() {
		console.log("Standfirst height: " + this.textElement.getBBox().height)		
	}

	render() {
		const standfirstStyle = {
			fontFamily: "NewsGothicMTOT-Regular"
		}

		return (
			<text
				ref={text => this.textElement = text}
				style={standfirstStyle}>
				{this.props.text.split(/\r?\n/g).map( (text,i) => 
					<tspan
						key={i}
						x={this.props.margins.right}
						y={this.props.margins.top + this.props.margins.headlineHeight + (i * 20)} >
						{text}
					</tspan>
				)}
			</text>
		)
	}

}

export default Standfirst