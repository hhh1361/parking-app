/* eslint-disable no-param-reassign */
export default async function combinedGet(api1, api2, func, param) {
	console.log('Loading start.')
	const time = Date.now()

	const proxy = 'https://cors-anywhere.herokuapp.com/'
	const url = new URL('http://80.249.84.47:11000/')

	const response = await Promise.all([
		fetch(proxy + url + api1, {
			method: 'GET',
			headers: new Headers({
				Accept: 'application/json',
				'Content-Type': 'application/json',
			}),
		}),
		fetch(proxy + url + api2, {
			method: 'GET',
			headers: new Headers({
				Accept: 'application/json',
				'Content-Type': 'application/json',
			}),
		}),
	]).then(res => {
		console.log(`Loading completed in  ${(Date.now() - time) / 1000} seconds.`)
		return res.map(e => e.json())
	})

	const array1 = await response[0].then(result => result)
	const array2 = await response[1].then(result => result)

	const allCars = array1.length > array2.length ? array1 : array2
	const onTerritoryCars = array1.length <= array2.length ? array1 : array2

	allCars.forEach(i => {
		if (onTerritoryCars.some(element => element.id === i.id)) {
			i.car_territory = 'На парковке'
		} else {
			i.car_territory = 'Отсутствует'
		}
	})

	func(allCars, param)
}
