/* eslint-disable camelcase */
import React from 'react'
import { connect } from 'react-redux'

function Row(props) {
	const { info, changeModal } = props
	const { car_brand, car_model, car_number, car_tenant, car_territory } = info
	const filter = e => {
		e.preventDefault()
		const modalObject = {
			state: true,
			field: e.target.className,
			value: e.target.className === 'tenant' ? car_tenant.name : car_territory,
			id: e.target.className === 'tenant' ? car_tenant.id : null,
		}
		changeModal(modalObject)
	}

	return (
		<>
			<tr>
				<td>{car_number}</td>
				<td>{car_brand ? car_brand.name : null}</td>
				<td>{car_model ? car_model.name : null}</td>
				<td onClick={filter} className="tenant">
					{car_tenant.name}
				</td>
				<td onClick={filter} className="territory">
					{car_territory ? 'тут' : '-'}
				</td>
			</tr>
		</>
	)
}

const mapStateToProps = state => {
	return {
		isModal: state.isModal,
	}
}

const mapsDispatchToProps = dispatch => ({
	changeModal: value => {
		dispatch({
			type: 'SET_MODAL',
			payload: value,
		})
	},
})

export default connect(mapStateToProps, mapsDispatchToProps)(Row)
