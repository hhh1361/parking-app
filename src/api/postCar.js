export default function postCar(func, method, api, body, carList) {
	console.log('Loading start.')
	const time = Date.now()

	const proxy = 'https://cors-anywhere.herokuapp.com/'
	const url = new URL('http://80.249.84.47:11000/')

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
				console.log(result)

				// apply changes to carList locally
				// for (let i = 0; i < carList.length; i++) {
				// 	if (carList[i].id === result.car) {
				// 		carList[i].car_territory = !carList[i].car_territory
				// 		break
				// 	}
				// }
				func([], true)
				func(carList, false)
			},

			error => {
				func(carList, false)
				console.log('Error: ', error)
				console.log(
					`Loading completed in  ${(Date.now() - time) / 1000} seconds.`,
				)
			},
		)
}
