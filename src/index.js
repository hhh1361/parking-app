import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'

const initialState = {
	carList: [],
	searchList: null,
	onTerritory: [],
	modal: { state: false, field: undefined, id: undefined },
	sort: { field: 'default', reverse: false },
	brands: [],
	models: [],
	input: {
		car_brand: { id: null, name: null },
		car_model: { id: null, name: null },
		car_tenant: { id: null, name: null },
		car_number: '',
	},
	isLoading: true,
}

function information(state = initialState, action) {
	switch (action.type) {
		case 'GET_CAR_LIST':
			return {
				...state,
				carList: action.payload,
			}
		case 'IS_LOADING':
			return {
				...state,
				isLoading: action.payload,
			}
		case 'SET_SORT_FIELD':
			return {
				...state,
				sort: action.payload,
			}
		case 'SET_MODAL':
			return {
				...state,
				modal: action.payload,
			}
		case 'CLOSE_MODAL':
			return {
				...state,
				modal: {
					...state.modal,
					state: action.payload,
				},
			}
		case 'GET_CARS_ON_TERRITORY':
			return {
				...state,
				onTerritory: action.payload,
			}
		case 'SET_SEARCH_LIST':
			return {
				...state,
				searchList: action.payload,
			}
		case 'SET_CAR_BRANDS':
			return {
				...state,
				brands: action.payload,
			}
		case 'SET_CAR_MODELS':
			return {
				...state,
				models: action.payload,
			}
		case 'SET_INPUT':
			return {
				...state,
				input: action.payload,
			}
		default:
			return state
	}
}

const store = createStore(information)
store.subscribe(() => {})

ReactDOM.render(
	<Provider store={store}>
		<App store={store.getState()} />
	</Provider>,
	document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
