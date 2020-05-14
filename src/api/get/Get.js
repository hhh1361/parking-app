export default function get(api, func, param) {
	console.log('Loading start.')
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
			console.log('Response: ', res)
			return res.json()
		})
		.then(
			result => {
				console.log('Result: ', result)
				func(result, param)
				console.log(
					`Loading completed in  ${(Date.now() - time) / 1000} seconds.`,
				)
			},

			error => {
				console.log('Error: ', error)
				console.log(
					`Loading completed in  ${(Date.now() - time) / 1000} seconds.`,
				)
			},
		)
}
