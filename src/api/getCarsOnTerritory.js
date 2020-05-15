import get from './get/Get'

export default function getCarsOnTerritory(func, param) {
	const api = 'api/stat/here/'
	get(api, func, param)
}
