import React from 'react'
import Chart from './svg/Chart'
import ControlsContainer from './containers/ControlsContainer'
import '../stylesheets/App.css'

const App = () => 
	<div className="app">
		<h1>Nature ChartBuilder
		</h1>
		<Chart />
		<ControlsContainer />
	
	</div>

export default App