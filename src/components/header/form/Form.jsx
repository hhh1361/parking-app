import React from 'react'
import { connect } from 'react-redux'
import Option from './option/Option'
import postCar from '../../../api/postCar'

import './Form.css'

function Form(props) {
	const { carList, brands, setLoading, sendCarInfo } = props

	console.log('brands: ', brands)
	const data = {
		car_number: '',
		car_brand: '',
		car_model: '',
		car_tenant: '',
	}

	const inputHandler = e => {
		data[e.target.id] = e.target.value
	}

	const sendInfo = () => {
		const api = 'api/cars/add/'

		setLoading(true)
		postCar(sendCarInfo, 'POST', api, data, carList)
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

			<Option field="car_brand" />
			<Option field="car_model" />

			{/* <div className="input-group-prepend">
				<button
					className="btn btn-outline-secondary dropdown-toggle"
					type="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					Марка
				</button>
				<div className="dropdown-menu">
					{brands.map(i => {
						return <Option field="car_brand" info={i} key={i.id} />
					})}
				</div>
			</div> */}

			<div className="form-group">
				<label htmlFor="car_model">
					Модель
					<input
						type="text"
						className="form-control"
						id="car_model"
						placeholder="Camry"
						onKeyUp={inputHandler}
					/>
				</label>
			</div>
			<div className="form-group">
				<label htmlFor="car_model">
					Модель
					<input
						type="text"
						className="form-control"
						id="car_tenant"
						onKeyUp={inputHandler}
					/>
				</label>
			</div>

			<div onClick={sendInfo}>КНОПКА</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		carList: state.carList,
		brands: state.brands,
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
})

export default connect(mapStateToProps, mapsDispatchToProps)(Form)
