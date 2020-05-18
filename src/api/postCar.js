import getAllCars from './getAllCars'

export default function postCar(
	func,
	method,
	api,
	body,
	carList,
	modalFunction,
) {
	console.log('Loading start.')
	const time = Date.now()

	const proxy = 'https://cors-anywhere.herokuapp.com/'
	const url = new URL('http://80.249.84.47:11000/api/cars/add/')

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
				}

				// adding new car cases
				if (api === 'api/cars/add/') {
					// incorrect car_number case
					if (result.car_number) {
						if (result.car_number[0] === 'Это поле обязательно.') {
							console.log('Неверный гос. номер автомобиля')
							func(carList, false)
							modalFunction({
								state: true,
								field: 'input-modal',
								id: 'Неверный гос. номер автомобиля',
							})
						} else {
							// repeat request to get all car data
							getAllCars(func, false)
							modalFunction({
								state: true,
								field: 'input-modal',
								id: 'Автомобиль добавлен',
							})
							console.log('Автомобиль добавлен')
						}
					} else if (result.car_tenant) {
						if (result.car_tenant[0] === 'Это поле не может быть null.') {
							console.log('Поле "Организация" должно быть заполнено')
							func(carList, false)
							modalFunction({
								state: true,
								field: 'input-modal',
								id: 'Поле "Организация" должно быть заполнено',
							})
						} else {
							// repeat request to get all car data
							getAllCars(func, false)
							modalFunction({
								state: true,
								field: 'input-modal',
								id: 'Автомобиль добавлен',
							})
							console.log('Автомобиль добавлен')
						}
					}
				}
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
