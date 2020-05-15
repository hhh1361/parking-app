/* eslint-disable camelcase */
import React from 'react'
import { connect } from 'react-redux'
import './Modal.css'
import getAllTenantsCars from '../../../api/getAllTenantsCars'
import getAllCars from '../../../api/getAllCars'

function Modal(props) {
	const { modal, closeModal, setLoading, getFilteredCarList } = props

	const setFilter = () => {
		setLoading(true)
		getAllTenantsCars(getFilteredCarList, false, modal.id)
		closeModal()
	}
	const resetFilter = () => {
		setLoading(true)
		getAllCars(getFilteredCarList, false)
		closeModal()
	}

	return (
		<>
			{modal.state ? (
				<div id="myModal">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Фильтр</h4>
								<button type="button" className="close" onClick={closeModal}>
									&times;
								</button>
							</div>

							<div className="modal-body">
								<div className="container">
									<button
										type="button"
										className="btn btn-primary"
										onClick={setFilter}
									>
										{`Установить фильтр по значению ${modal.field}`}
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
						</div>
					</div>
				</div>
			) : null}
		</>
	)
}

const mapStateToProps = state => {
	return {
		modal: state.modal,
	}
}

const mapsDispatchToProps = dispatch => ({
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
