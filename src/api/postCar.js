import getAllCars from './getAllCars'

export default function postCar(func, method, api, body, carList, carData) {
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

				// entering and leaving the parking
				if (api === 'api/stat/add/') {
					// apply changes to carList locally
					for (let i = 0; i < carList.length; i++) {
						if (carList[i].id === result.car) {
							carList[i].car_territory = !carList[i].car_territory
							break
						}
					}
					func([], true)
					func(carList, false)
				} else if (result.car_number[0] === 'Это поле обязательно.') {
					// incorrect car_number case
					console.log('Неверный гос. номер автомобиля')
					func(carList, false)
				} else {
					// if response is ok
					// repeat request to get all car data
					getAllCars(func, false)
				}

				console.log('Автомобиль добавлен')
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
