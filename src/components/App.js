import React from 'react'
import ChartContainer from './containers/ChartContainer'
import ControlsContainer from './containers/ControlsContainer'
import '../stylesheets/App.css'

const App = () => 
	<div className="app">
		<div className="chartContainer">
			<ChartContainer />
		</div>
		<ControlsContainer />
	
	</div>

export default App