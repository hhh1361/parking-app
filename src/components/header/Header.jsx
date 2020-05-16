import React from 'react'
import { connect } from 'react-redux'
import Form from './form/Form'
import Button from '../other/button/Button'
import './Header.css'

function Header(props) {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col d-flex justify-content-center">
						<Button
							text="Добавить новый автомобиль"
							btnClass="btn-primary"
							target="multiCollapseExample1"
						/>
					</div>
					<div className="col d-flex justify-content-center">
						<Button
							text="Поиск по гос. номеру"
							btnClass="btn-primary"
							target="multiCollapseExample2"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<div className="collapse multi-collapse" id="multiCollapseExample1">
							<div className="card card-body">
								<Form />
							</div>
						</div>
					</div>
					<div className="col">
						<div className="collapse multi-collapse" id="multiCollapseExample2">
							<div className="card card-body">
								<Form />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

const mapStateToProps = state => {
	return {
		mode: state.mode,
	}
}

export default connect(mapStateToProps)(Header)
