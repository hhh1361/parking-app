import get from './get/Get'

const api = 'api/cars/'

export default function getAllCars(func, param) {
	get(api, func, param)
}
