import combinedGet from './get/combinedGet'

export default function getAllCars(func, param) {
	const api1 = 'api/cars/'
	const api2 = 'api/stat/here/'
	combinedGet(api1, api2, func, param)
}
