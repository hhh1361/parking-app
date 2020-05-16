import get from './get/get'

export default function getCarsOnTerritory(func, param) {
	const api = 'api/stat/here/'
	get(api, func, param)
}
