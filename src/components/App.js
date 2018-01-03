import React from 'react'
import Chart from './ui/Chart'
import ChartExport from './ChartExport'
import '../stylesheets/App.css'

const App = () => 
	<div className="app">
		<h1>Nature ChartBuilder
		</h1>
		<Chart />
		<ChartExport />
	
	</div>

export default App