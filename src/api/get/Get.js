<<<<<<< HEAD
export default function get(header, api, func, param) {
	console.log(`${header}. Loading start.`)
=======
export default function get(api, func, param) {
	console.log('Loading start.')
>>>>>>> 3d23430f0d5aa08b0491f5f7480c1daaa60699fb
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
<<<<<<< HEAD
=======
			console.log('Response: ', res)
>>>>>>> 3d23430f0d5aa08b0491f5f7480c1daaa60699fb
			return res.json()
		})
		.then(
			result => {
<<<<<<< HEAD
				func(result, param)

				console.log(
					`${header}. Loading completed in  ${(Date.now() - time) /
						1000} seconds.`,
=======
				console.log('Result: ', result)
				func(result, param)
				console.log(
					`Loading completed in  ${(Date.now() - time) / 1000} seconds.`,
>>>>>>> 3d23430f0d5aa08b0491f5f7480c1daaa60699fb
				)
			},

			error => {
				console.log('Error: ', error)
				console.log(
<<<<<<< HEAD
					`${header}. Loading completed in  ${(Date.now() - time) /
						1000} seconds.`,
=======
					`Loading completed in  ${(Date.now() - time) / 1000} seconds.`,
>>>>>>> 3d23430f0d5aa08b0491f5f7480c1daaa60699fb
				)
			},
		)
}
