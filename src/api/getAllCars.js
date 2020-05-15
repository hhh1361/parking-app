import get from './get/Get'

export default function getAllCars(func, param) {
	const api = 'api/cars/'
	get(api, func, param)
}
