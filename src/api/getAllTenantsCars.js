import get from './get/Get'

export default function getAllTetantsCars(func, param, id) {
	const api = `api/cars/tenant/${id}/`
	get(api, func, param)
}
