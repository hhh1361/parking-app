import React from 'react'
import { connect } from 'react-redux'
import Option from './option/Option'
import postCar from '../../../api/postCar'

import './Form.css'

function Form(props) {
	const {
		carList,
		brands,
		models,
		tenants,
		input,
		setLoading,
		setModal,
		sendCarInfo,
	} = props

	let carNumber
	const inputHandler = e => {
		carNumber = e.target.value
		input.car_number = e.target.value
	}

	const sendInfo = () => {
		const data = {
			car_number: carNumber,
			car_brand: input.car_brand.id,
			car_model: input.car_model.id,
			car_tenant: input.car_tenant.id,
		}
		const api = 'api/cars/add/'
		setLoading(true)
		postCar(sendCarInfo, 'POST', api, data, carList, setModal)
	}

	return (
		<div className="container">
			<input
				type="text"
				className="form-control"
				id="car_number"
				placeholder="Гос. номер"
				onKeyUp={inputHandler}
			/>

			<Option field="car_brand" input={input} options={brands} header="Марка" />
			<Option
				field="car_model"
				input={input}
				options={models}
				header="Модель"
			/>
			<Option
				field="car_tenant"
				input={input}
				options={tenants}
				header="Организация"
			/>

			<button
				type="button"
				className="btn btn-secondary btn-lg"
				onClick={sendInfo}
			>
				Добавить
			</button>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		carList: state.carList,
		brands: state.brands,
		models: state.models,
		tenants: state.tenants,
		input: state.input,
	}
}
const mapsDispatchToProps = dispatch => ({
	sendCarInfo: (carList, isLoading) => {
		dispatch({
			type: 'GET_CAR_LIST',
			payload: carList,
		})
		dispatch({
			type: 'IS_LOADING',
			payload: isLoading,
		})
	},
	setLoading: () => {
		dispatch({
			type: 'IS_LOADING',
			payload: true,
		})
	},
	setModal: value => {
		dispatch({
			type: 'SET_MODAL',
			payload: value,
		})
	},
})

export default connect(mapStateToProps, mapsDispatchToProps)(Form)
