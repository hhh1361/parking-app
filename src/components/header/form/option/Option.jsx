import React from 'react'
import { connect } from 'react-redux'
import getAllBrandModels from '../../../../api/getAllBrandModels'

function Option(props) {
	const {
		field,
		input,
		brands,
		models,
		setInput,
		setModels,
		setLoading,
	} = props

	const displayedOptions = field === 'car_brand' ? brands : models
	const displayedHeader = field === 'car_brand' ? 'Марка' : 'Модель'

	const onClickHandler = e => {
		const id = e.target.classList[1]
		const name = e.target.innerHTML
		input[field] = { id, name }
		setInput(null)
		setInput(input)
		if (field === 'car_brand') {
			setLoading()
			getAllBrandModels(setModels, false, id)
		}
	}

	console.log('displayedOptions: ', displayedOptions)

	return (
		<div className="input-group-prepend">
			<button
				className="btn btn-outline-secondary dropdown-toggle"
				type="button"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false"
			>
				{input[field].name || displayedHeader}
			</button>
			<div className="dropdown-menu">
				{displayedOptions.map(i => (
					<a
						className={`dropdown-item ${i.id}`}
						href="#"
						onClick={onClickHandler}
						key={i.id}
					>
						{i.name}
					</a>
				))}
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		input: state.input,
		brands: state.brands,
		models: state.models,
	}
}
const mapsDispatchToProps = dispatch => ({
	setInput: value => {
		dispatch({
			type: 'SET_INPUT',
			payload: value,
		})
	},
	setModels: (models, isLoading) => {
		dispatch({
			type: 'SET_MODELS',
			payload: models,
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

export default connect(mapStateToProps, mapsDispatchToProps)(Option)
