import React from 'react'
import { connect } from 'react-redux'
import Row from './row/Row'
import TableHeader from './header/TableHeader'
import './Table.css'
import sortSourceData from '../../api/tableSortLogic'

function Table(props) {
	const { carList, searchList, sort } = props

	const cars = searchList || carList

	const optionsList = [
		'car_number',
		'car_brand',
		'car_model',
		'car_tenant',
		'car_territory',
	]
	const sortedArray = sortSourceData(sort, cars)

	console.log('Rerender Table', cars)
	return (
		<div className="container">
			<table className="table table-dark table-hover table-bordered">
				<thead>
					<tr>
						{optionsList.map(e => (
							<TableHeader header={e} key={e} />
						))}
					</tr>
				</thead>
				<tbody>
					{cars.length
						? sortedArray.map(e => <Row info={e} key={e.id} />)
						: null}
				</tbody>
			</table>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		carList: state.carList,
		searchList: state.searchList,
		sort: state.sort,
		onTerritory: state.onTerritory,
	}
}

export default connect(mapStateToProps)(Table)
