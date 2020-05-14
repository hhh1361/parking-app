import React from 'react'
import { connect } from 'react-redux'
import Row from './row/Row'
import Header from './header/Header'
import './Table.css'

function Table(props) {
	const { carList, isLoading } = props
	console.log('table rerender: ', isLoading)
	const optionsList = ['№', 'Номер', 'Марка', 'Модель', 'Организация']
	return (
		<>
			{isLoading ? <div className="loader" /> : null}
			<table className="table table-dark">
				<thead>
					<tr>
						{optionsList.map(e => (
							<Header header={e} key={e} />
						))}
					</tr>
				</thead>
				<tbody>
					{carList.length
						? carList.map((e, index) => (
								<Row info={e} key={e.id} rowNumber={index} />
						  ))
						: null}
				</tbody>
			</table>
		</>
	)
}

const mapStateToProps = state => {
	return {
		carList: state.carList,
		isLoading: state.isLoading,
	}
}

export default connect(mapStateToProps)(Table)
