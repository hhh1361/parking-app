/* eslint-disable camelcase */
import React from 'react'
import { connect } from 'react-redux'
import Modal from '../../other/modal/Modal'

function Row(props) {
	const { info, changeModal } = props
	const { id, car_brand, car_model, car_number, car_tenant } = info
	const filter = e => {
		e.preventDefault()
		console.log(e.target)
		changeModal(true, car_tenant.name)
	}

	return (
		<>
			<tr>
				<td>{car_number}</td>
				<td>{car_brand ? car_brand.name : null}</td>
				<td>{car_model ? car_model.name : null}</td>
				<td onClick={filter}>{car_tenant.name}</td>
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
		console.log('send')
		dispatch({
			type: 'IS_MODAL',
			payload: value,
		})
	},
})

export default connect(mapStateToProps, mapsDispatchToProps)(Row)
