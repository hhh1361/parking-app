export default function get(header, api, func, param) {
	console.log(`${header}. Loading start.`)
	const time = Date.now()

	const proxy = 'https://cors-anywhere.herokuapp.com/'
	const url = new URL('http://80.249.84.47:11000/')

	fetch(proxy + url + api, {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
			'Content-Type': 'application/json',
		}),
	})
		.then(res => {
			return res.json()
		})
		.then(
			result => {
				func(result, param)

				console.log(
					`${header}. Loading completed in  ${(Date.now() - time) /
						1000} seconds.`,
				)
			},

			error => {
				console.log('Error: ', error)
				console.log(
					`${header}. Loading completed in  ${(Date.now() - time) /
						1000} seconds.`,
				)
			},
		)
}
