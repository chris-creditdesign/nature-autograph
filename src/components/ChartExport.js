import React, { Component } from 'react'
import saveSvgAsPng from 'save-svg-as-png'

class ChartExport extends Component {
	constructor(props) {
		super(props)

		this.autoClickDownload = this.autoClickDownload.bind(this)
		this.downloadSVG = this.downloadSVG.bind(this)
		this.downloadPNG = this.downloadPNG.bind(this)
	}

	autoClickDownload(uri) {
		const a = document.createElement('a')
		a.download = "nature-graphic.svg"
		a.href = uri
		document.body.appendChild(a)
		a.addEventListener("click", e => {
			a.parentNode.removeChild(a)
		})
		a.click()
	}

	downloadSVG() {
		const svg = document.getElementById("svg-chart")

		// https://stackoverflow.com/a/23218877
		//get svg source.
		const serializer = new XMLSerializer();
		const source = serializer.serializeToString(svg);

		//convert svg source to URI data scheme.
		const url = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(source);
		this.autoClickDownload(url)
	}

	downloadPNG() {
		const svg = document.getElementById("svg-chart")

		saveSvgAsPng.saveSvgAsPng(svg, "nature-graphic.png", { scale: 1.0 });
	}

	render() {
		return (
			<div>
				<button onClick={this.downloadSVG}>Download SVG</button>
				<button onClick={this.downloadPNG}>Download PNG</button>
			</div>
		)
	}
}

export default ChartExport