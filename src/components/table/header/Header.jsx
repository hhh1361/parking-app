import React from 'react'
import { connect } from 'react-redux'

function Header(props) {
	const { header, carList, applyResult } = props
	const optionsList = ['№', 'Гос. номер', 'Марка', 'Модель', 'Арендатор']
	const sort = () => {
		applyResult([])
		applyResult(
			carList.sort((a, b) => {
				if (a.car_number > b.car_number) {
					return 1
				}
				if (a.car_number < b.car_number) {
					return -1
				}
				return 0
			}),
		)
	}

	return (
		<td>
			<div onClick={sort}>{header}</div>
		</td>
	)
}

const mapStateToProps = state => {
	return {
		carList: state.carList,
	}
}
const mapsDispatchToProps = dispatch => ({
	applyResult: carList => {
		dispatch({
			type: 'GET_CAR_LIST',
			payload: carList,
		})
	},
})

export default connect(mapStateToProps, mapsDispatchToProps)(Header)
