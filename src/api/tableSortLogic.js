export default function sortSourceData(fieldToSort, source) {
	let sortedArray
	const { field, reverse } = fieldToSort

	if (field === 'default') {
		sortedArray = source
	} else {
		sortedArray = source.sort((a, b) => {
			if (a[field] === null && b[field] === null) {
				return 0
			}

			if (a[field] !== null && b[field] === null) {
				return -1
			}

			if (a[field] === null && b[field] !== null) {
				return 1
			}

			if (a[field] !== null && b[field] !== null) {
				if (a[field].name) {
					if (a[field].name > b[field].name) {
						return reverse ? -1 : 1
					}
					if (a[field].name < b[field].name) {
						return reverse ? 1 : -1
					}
					return 0
				}
				if (a[field] > b[field]) {
					return reverse ? -1 : 1
				}
				if (a[field] < b[field]) {
					return reverse ? 1 : -1
				}
				return 0
			}
			return 0
		})
	}
	return sortedArray
}
