/* eslint-disable camelcase */
import React from 'react'
import { connect } from 'react-redux'
import './Modal.css'
import getAllTenantsCars from '../../../api/getAllTenantsCars'
import getAllCars from '../../../api/getAllCars'
import postCar from '../../../api/postCar'

function Modal(props) {
	const {
		modal,
		carList,
		closeModal,
		setLoading,
		getFilteredCarList,
		getParkedCarList,
		setCarOnTerrytory,
	} = props

	const api = 'api/stat/add/'
	const classNameModal =
		modal.id === 'Автомобиль добавлен'
			? 'modal-header green'
			: 'modal-header red'

	const setFilter = () => {
		setLoading(true)

		if (modal.field === 'tenant') {
			getAllTenantsCars(getFilteredCarList, false, modal.id)
		}
		if (modal.field === 'territory') {
			getAllCars(getParkedCarList, false)
		}

		closeModal()
	}
	const resetFilter = () => {
		setLoading(true)
		getAllCars(getFilteredCarList, false)
		closeModal()
	}
	const onTerritory = () => {
		const body = {
			time_in: new Date().toLocaleTimeString(),
			days: new Date().toLocaleDateString(),
			last_flag: false,
			car: modal.carId,
		}

		setLoading(true)
		postCar(setCarOnTerrytory, 'POST', api, body, carList)
		closeModal()
	}
	const fromTerritory = () => {
		const body = {
			time_out: new Date().toLocaleTimeString(),
			last_flag: true,
			car: modal.carId,
		}

		setLoading(true)
		postCar(setCarOnTerrytory, 'PUT', api, body, carList)
		closeModal()
	}

	return (
		<>
			{modal.state ? (
				<div id="myModal">
					<div className="modal-dialog">
						{modal.field !== 'input-modal' ? (
							<div className="modal-content">
								<div className="modal-header">
									<h4 className="modal-title">Фильтр</h4>
									<button type="button" className="close" onClick={closeModal}>
										&times;
									</button>
								</div>

								<div className="modal-body">
									<div className="container d-flex justify-content-between">
										<button
											type="button"
											className="btn btn-primary"
											onClick={setFilter}
										>
											{`Установить фильтр по значению ${modal.value}`}
										</button>
										<button
											type="button"
											className="btn btn-danger"
											onClick={resetFilter}
										>
											Сбросить фильтр
										</button>
									</div>
								</div>

								{modal.field === 'territory' ? (
									<div className="modal-content">
										<div className="modal-header">
											<h4 className="modal-title">Действие с автомобилем</h4>
										</div>
										<div className="modal-body">
											<div className="container d-flex justify-content-between">
												<button
													type="button"
													className="btn btn-primary"
													onClick={onTerritory}
												>
													Прибытиe на парковку
												</button>
												<button
													type="button"
													className="btn btn-danger"
													onClick={fromTerritory}
												>
													Убытие с парковки
												</button>
											</div>
										</div>
									</div>
								) : null}
							</div>
						) : (
							<div className="modal-content">
								<div className={classNameModal}>
									<h4 className="modal-title">{modal.id}</h4>
									<button type="button" className="close" onClick={closeModal}>
										&times;
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			) : null}
		</>
	)
}

const mapStateToProps = state => {
	return {
		modal: state.modal,
		carList: state.carList,
	}
}

const mapsDispatchToProps = dispatch => ({
	getParkedCarList: (carList, isLoading) => {
		dispatch({
			type: 'GET_CAR_LIST',
			payload: carList.filter(e => !!e.car_territory),
		})
		dispatch({
			type: 'IS_LOADING',
			payload: isLoading,
		})
	},
	getFilteredCarList: (carList, isLoading) => {
		dispatch({
			type: 'GET_CAR_LIST',
			payload: carList,
		})
		dispatch({
			type: 'IS_LOADING',
			payload: isLoading,
		})
	},
	setCarOnTerrytory: (carList, isLoading) => {
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
	closeModal: () => {
		dispatch({
			type: 'CLOSE_MODAL',
			payload: false,
		})
	},
})

export default connect(mapStateToProps, mapsDispatchToProps)(Modal)
