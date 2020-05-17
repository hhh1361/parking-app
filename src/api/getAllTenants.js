import get from './get/get'

export default function getAllTenants(func, param) {
	const api = 'api/tenants/'
	const header = 'All tenants'
	get(header, api, func, param)
}
