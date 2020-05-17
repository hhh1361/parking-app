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
		postCar(sendCarInfo, 'POST', api, data, carList, input)
	}

	return (
		<div className="container">
			<div className="form-group">
				<label htmlFor="car_number">
					Гос. номер
					<input
						type="text"
						className="form-control"
						id="car_number"
						placeholder="0000 АА-0"
						onKeyUp={inputHandler}
					/>
				</label>
			</div>

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

			<div onClick={sendInfo}>КНОПКА</div>
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
	// setInput: value => {
	// 	dispatch({
	// 		type: 'SET_INPUT',
	// 		payload: value,
	// 	})
	// },
	setLoading: () => {
		dispatch({
			type: 'IS_LOADING',
			payload: true,
		})
	},
})

export default connect(mapStateToProps, mapsDispatchToProps)(Form)
