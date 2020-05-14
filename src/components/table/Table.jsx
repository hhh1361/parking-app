import React from 'react'
import { connect } from 'react-redux'
import Row from './row/Row'
import Header from './header/Header'
import './Table.css'

function Table(props) {
	console.log('Rerender Table')
	const { carList } = props
	const optionsList = ['№', 'Гос. номер', 'Марка', 'Модель', 'Арендатор']
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
						? carList.map((e, index) => (
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
		isLoading: state.isLoading,
	}
}

export default connect(mapStateToProps)(Table)
