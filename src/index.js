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
	isLoading: true,
	modal: { state: false, field: undefined, id: undefined },
	sort: { field: 'default', reverse: false },
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
		case 'ADD_COMPANY':
			return {
				...state,
				information: {
					...state.information,
					input: { ...state.information.input, company: action.payload },
				},
			}
		case 'ADD_TIMEZONE':
			return {
				...state,
				information: {
					...state.information,
					select: { ...state.information.select, timezone: action.payload },
				},
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
