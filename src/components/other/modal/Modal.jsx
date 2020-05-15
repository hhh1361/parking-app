/* eslint-disable camelcase */
import React from 'react'
import { connect } from 'react-redux'
import './Modal.css'

function Modal(props) {
	const { isModal, closeModal } = props

	console.log('is modal component: ', isModal)

	return (
		<>
			{isModal ? (
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
									<button type="button" className="btn btn-primary">
										{`Установить фильтр по значению ${isModal}`}
									</button>
									<button type="button" className="btn btn-danger">
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
		isModal: state.isModal,
	}
}

const mapsDispatchToProps = dispatch => ({
	closeModal: () => {
		dispatch({
			type: 'IS_MODAL',
			payload: false,
		})
	},
})

export default connect(mapStateToProps, mapsDispatchToProps)(Modal)
