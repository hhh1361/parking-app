import combinedGet from './get/combinedGet'

export default function getAllTetantsCars(func, param, id) {
	const api1 = `api/cars/tenant/${id}/`
	const api2 = 'api/stat/here/'
	combinedGet(api1, api2, func, param)
}
