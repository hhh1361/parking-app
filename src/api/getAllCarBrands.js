import get from './get/get'

export default function getAllCarBrands(func, param) {
	const api = 'api/cars/brands/'
	const header = 'All car brands'
	get(header, api, func, param)
}
