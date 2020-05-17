import React from 'react'
import { connect } from 'react-redux'
import Form from './form/Form'
import Search from './search/Search'
import Button from '../other/button/Button'
import './Header.css'

function Header(props) {
	return (
		<>
			<div className="row">
				<div className="col d-flex justify-content-center">
					<Button
						text="Добавить новый автомобиль"
						btnClass="btn-primary"
						target="input-new-car"
					/>
				</div>
				<div className="col d-flex justify-content-center">
					<Button
						text="Поиск по гос. номеру"
						btnClass="btn-primary"
						target="search-car"
					/>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<div className="d-flex justify-content-center">
						<div className="collapse multi-collapse" id="input-new-car">
							<div className="card card-body text-white bg-dark mb-3">
								<Form />
							</div>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="collapse multi-collapse" id="search-car">
						<div className="card card-body text-white bg-dark mb-3">
							<Search />
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
