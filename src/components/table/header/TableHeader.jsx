import React from 'react'
import { connect } from 'react-redux'
import './TableHeader.css'

function TableHeader(props) {
	const { header, sort, setSortField } = props
	const optionsList = {
		car_number: 'Гос. номер',
		car_brand: 'Марка',
		car_model: 'Модель',
		car_tenant: 'Арендатор',
		car_territory: 'что-то',
	}
	let headerClassName
	if (sort.field === header) {
		headerClassName = sort.reverse ? 'triangle-up' : 'triangle-down'
	} else {
		headerClassName = 'triangle-non'
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
			<div className="container" onClick={sortHandler}>
				<div className="header-text">{optionsList[header]}</div>
				<div className="container">
					<div className={headerClassName} />
				</div>
			</div>
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

export default connect(mapStateToProps, mapsDispatchToProps)(TableHeader)
