import React from 'react'
import ChartContainer from './containers/ChartContainer'
import ControlsContainer from './containers/ControlsContainer'
import '../stylesheets/App.css'

const App = () => 
	<div className="app">
		<h1>Nature ChartBuilder
		</h1>
		<ChartContainer />
		<ControlsContainer />
	
	</div>

export default App