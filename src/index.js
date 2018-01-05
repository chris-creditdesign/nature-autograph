import React from 'react'
import { render } from 'react-dom'
import appReducer from './store/reducers'
import sampleData from './initialState'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'

const initialState = localStorage["nature-autograph"] ?
	JSON.parse(localStorage["nature-autograph"]) :
	sampleData

const saveState = () =>
	localStorage["nature-autograph"] = JSON.stringify(store.getState())

const store = createStore(appReducer, initialState)
store.subscribe(saveState)

window.store = store

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'))
