/* eslint-disable camelcase */
import React from 'react'
import { connect } from 'react-redux'

function Row(props) {
	const { info, changeModal } = props
	const { car_brand, car_model, car_number, car_tenant, car_territory } = info
	const filter = e => {
		e.preventDefault()
		console.log({ state: true, field: car_tenant.name })
		const modalObject = {
			state: true,
			field: car_tenant.name,
			id: car_tenant.id,
		}
		changeModal(modalObject)
	}

	return (
		<>
			<tr>
				<td>{car_number}</td>
				<td>{car_brand ? car_brand.name : null}</td>
				<td>{car_model ? car_model.name : null}</td>
				<td onClick={filter}>{car_tenant.name}</td>
				<td>{car_territory}</td>
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
