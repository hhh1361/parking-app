import React from 'react'
import { connect } from 'react-redux'
import './Search.css'

function Search(props) {
	const { carList, searchList, setSearchList } = props
	const doSearch = e => {
		const value = e.target.value.toLowerCase()

		const filtered = carList.filter(num => {
			return num.car_number.toLowerCase().includes(value)
		})

		if (e.target.value.length) {
			setSearchList(filtered)
		} else {
			setSearchList(null)
		}
		console.log(filtered)
	}

	return <input placeholder="0000 AA-0" onKeyUp={doSearch} type="text" />
}

const mapStateToProps = state => {
	return {
		carList: state.carList,
		searchList: state.searchList,
	}
}

const mapsDispatchToProps = dispatch => ({
	setSearchList: value => {
		dispatch({
			type: 'SET_SEARCH_LIST',
			payload: value,
		})
	},
})

export default connect(mapStateToProps, mapsDispatchToProps)(Search)
