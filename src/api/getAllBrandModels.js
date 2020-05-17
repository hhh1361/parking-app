import get from './get/get'

export default function getAllBrandModels(func, param, id) {
	const api = `api/cars/brands/${id}/`
	const header = 'All car models'
	get(header, api, func, param)
}
