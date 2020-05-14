/* eslint-disable camelcase */
import React from 'react'
import { connect } from 'react-redux'

function Row(props) {
	const { info, rowNumber } = props
	const { id, car_brand, car_model, car_number, car_tenant } = info

	return (
		<tr>
			<th scope="row">{rowNumber + 1}</th>
			<td>{car_number || null}</td>
			<td>{car_brand ? car_brand.name : null}</td>
			<td>{car_model ? car_model.name : null}</td>
			<td>{car_tenant ? car_tenant.name : null}</td>
		</tr>
	)
}

const mapStateToProps = state => {
	return {
		menu: state.menu,
	}
}

export default connect(mapStateToProps)(Row)
