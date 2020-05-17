import React from 'react'
import { connect } from 'react-redux'
import Header from './components/header/Header'
import Table from './components/table/Table'
import Spinner from './components/other/spinner/Spinner'
import Modal from './components/other/modal/Modal'
import Form from './components/header/form/Form'
import './App.css'
import getAllCars from './api/getAllCars'
import getCarsOnTerritory from './api/getCarsOnTerritory'
import getAllCarBrands from './api/getAllCarBrands'
import getAllTenants from './api/getAllTenants'

function App(props) {
	const {
		getCarList,
		getCarListOnTerritory,
		setCarBrands,
		setCarTenants,
	} = props

	getAllCars(getCarList, false)
	getCarsOnTerritory(getCarListOnTerritory)
	getAllCarBrands(setCarBrands)
	getAllTenants(setCarTenants)

	return (
		<div className="container">
			<Header />

			<Table />

			<Spinner />
			<Modal />
		</div>
	)
}

const mapStateToProps = state => {
	return {
		menu: state.menu,
	}
}
const mapsDispatchToProps = dispatch => ({
	getCarList: (carList, isLoading) => {
		dispatch({
			type: 'GET_CAR_LIST',
			payload: carList,
		})
		dispatch({
			type: 'IS_LOADING',
			payload: isLoading,
		})
	},
	getCarListOnTerritory: carList => {
		dispatch({
			type: 'GET_CARS_ON_TERRITORY',
			payload: carList,
		})
	},
	setCarBrands: value => {
		dispatch({
			type: 'SET_CAR_BRANDS',
			payload: value,
		})
	},
	setCarTenants: value => {
		dispatch({
			type: 'SET_CAR_TENANTS',
			payload: value,
		})
	},
})

export default connect(mapStateToProps, mapsDispatchToProps)(App)
