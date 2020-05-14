import React from 'react'
import { connect } from 'react-redux'

function Header(props) {
	const { header, carList, applyResult, sort, setSortField } = props
	const optionsList = {
		'№': '№',
		car_number: 'Гос. номер',
		car_brand: 'Марка',
		car_model: 'Модель',
		car_tenant: 'Арендатор',
	}

	const sortHandler = () => {
		if (sort.field !== header) {
			setSortField({ field: header, reverse: false })
		} else {
			setSortField({ field: header, reverse: !sort.reverse })
		}
	}

	return (
		<td>
			<div onClick={sortHandler}>{optionsList[header]}</div>
		</td>
	)
}

const mapStateToProps = state => {
	return {
		carList: state.carList,
		sort: state.sort,
	}
}
const mapsDispatchToProps = dispatch => ({
	setSortField: field => {
		dispatch({
			type: 'SET_SORT_FIELD',
			payload: field,
		})
	},
})

export default connect(mapStateToProps, mapsDispatchToProps)(Header)
