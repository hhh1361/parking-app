import get from './get/get'

export default function getCarsOnTerritory(func, param) {
	const api = 'api/stat/here/'
	const header = 'Cars on territory'
	get(header, api, func, param)
}
