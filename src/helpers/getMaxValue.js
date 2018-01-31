import { stack } from 'd3-shape'

const getMaxValue = function(dependentVariables, data, columnList, chartType) {

	if (chartType.stacked) {
		const keys = dependentVariables.map( elem => columnList[elem])

		const stacker = stack()
			.keys(keys)

		const stacked = stacker(data)

		return Math.max(...stacked[stacked.length - 1].map(d => d[1]))
	} else {
		return Math.max(...dependentVariables.map( (elem,i) => {
						return Math.max(...data.map(d => d[columnList[elem]]))
					}))
	}
}

export default getMaxValue