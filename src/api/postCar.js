export default function postCar(func, body, param, carList, method) {
	console.log('Loading start.')
	const time = Date.now()

	const proxy = 'https://cors-anywhere.herokuapp.com/'
	const url = new URL('http://80.249.84.47:11000/')
	const api = 'api/stat/add/'

	fetch(proxy + url + api, {
		method,
		headers: new Headers({
			'Content-Type': 'application/json',
		}),
		body: JSON.stringify(body),
	})
		.then(res => {
			return res.json()
		})
		.then(
			result => {
				console.log(
					`Loading completed in  ${(Date.now() - time) / 1000} seconds.`,
				)

				// apply changes to carList locally
				for (let i = 0; i < carList.length; i++) {
					if (carList[i].id === result.car) {
						carList[i].car_territory = !carList[i].car_territory
						break
					}
				}
				func([], true)
				func(carList, param)
			},

			error => {
				func(carList, param)
				console.log('Error: ', error)
				console.log(
					`Loading completed in  ${(Date.now() - time) / 1000} seconds.`,
				)
			},
		)
}
