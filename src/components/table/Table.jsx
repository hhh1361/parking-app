import React from 'react'
import { connect } from 'react-redux'
import Row from './row/Row'
import Header from './header/Header'
import './Table.css'
import sortSourceData from '../../api/tableSortLogic'

function Table(props) {
	console.log('Rerender Table')

	const { carList, sort } = props
	const optionsList = [
		'№',
		'car_number',
		'car_brand',
		'car_model',
		'car_tenant',
	]
	const sortedArray = sortSourceData(sort, carList)

	console.log(sortedArray)

	return (
		<div className="container">
			<table className="table table-dark table-hover">
				<thead>
					<tr>
						{optionsList.map(e => (
							<Header header={e} key={e} />
						))}
					</tr>
				</thead>
				<tbody>
					{carList.length
						? sortedArray.map((e, index) => (
								<Row info={e} key={e.id} rowNumber={index} />
						  ))
						: null}
				</tbody>
			</table>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		carList: state.carList,
		sort: state.sort,
	}
}

export default connect(mapStateToProps)(Table)
