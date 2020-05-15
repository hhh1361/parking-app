import React from 'react'
import { connect } from 'react-redux'
import Table from './components/table/Table'
import Spinner from './components/other/spinner/Spinner'
import Modal from './components/other/modal/Modal'
// import Form from './components/form/Form'
import './App.css'
import getAllCars from './api/getAllCars'
import getCarsOnTerritory from './api/getCarsOnTerritory'

function App(props) {
	const { getCarList, getCarListOnTerritory } = props

	getAllCars(getCarList, false)
	// getCarsOnTerritory(getCarListOnTerritory)

	// const addCar = () => {
	// 	console.log('Start fetch')
	// 	const proxy = 'https://cors-anywhere.herokuapp.com/'
	// 	const url = new URL('http://80.249.84.47:11000/')
	// 	const api = 'api/cars/add/'
	// 	const info = {
	// 		number: '5528 АА-7',
	// 		brand: 'id',
	// 		model: 'id',
	// 		tenant: 'id',
	// 	}

	// 	fetch(proxy + url + api, {
	// 		method: 'POST',
	// 		headers: new Headers({
	// 			'Content-Type': 'application/json',
	// 		}),
	// 		body: JSON.stringify(info),
	// 	})
	// 		.then(res => {
	// 			console.log('Response: ', res)
	// 			return res.json()
	// 		})
	// 		.then(
	// 			result => {
	// 				console.log('Result: ', result)
	// 			},

	// 			error => {
	// 				console.log('Error: ', error)
	// 			},
	// 		)
	// }

	// function addStat() {
	// 	console.log('Start fetch')
	// 	const proxy = 'https://cors-anywhere.herokuapp.com/'
	// 	const url = new URL('http://80.249.84.47:11000/')
	// 	const api = 'api/stat/add/'
	// 	const info = {
	// 		time_in: '15:54:48',
	// 		days: '08.05.2020',
	// 		last_flag: false,
	// 		car: 17,
	// 	}

	// 	fetch(proxy + url + api, {
	// 		method: 'POST',
	// 		headers: new Headers({
	// 			'Content-Type': 'application/json',
	// 		}),
	// 		body: JSON.stringify(info),
	// 	})
	// 		.then(res => {
	// 			console.log('Response: ', res)
	// 			return res.json()
	// 		})
	// 		.then(
	// 			result => {
	// 				console.log('Result: ', result)
	// 			},

	// 			error => {
	// 				console.log('Error: ', error)
	// 			},
	// 		)
	// }
	return (
		<>
			{/* <Header /> */}
			<Table />
			<Spinner />
			<Modal />
		</>
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
})

export default connect(mapStateToProps, mapsDispatchToProps)(App)
