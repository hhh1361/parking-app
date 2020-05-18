import React from 'react'
import { connect } from 'react-redux'
import getAllBrandModels from '../../../../api/getAllBrandModels'

function Option(props) {
	const {
		field,
		header,
		options,
		input,
		setInput,
		setModels,
		setLoading,
	} = props

	const onClickHandler = e => {
		const id = e.target.classList[1]
		const name = e.target.innerHTML
		const result = { ...input, [field]: { id, name } }
		setInput(result)
		if (field === 'car_brand') {
			setLoading()
			getAllBrandModels(setModels, false, id)
		}
	}

	return (
		<div className="input-group-prepend">
			<button
				className="btn btn-outline-secondary dropdown-toggle"
				type="button"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false"
			>
				{input[field].name || header}
			</button>
			<div className="dropdown-menu">
				{options.map(i => (
					<div
						className={`dropdown-item ${i.id}`}
						onClick={onClickHandler}
						key={i.id}
					>
						{i.name}
					</div>
				))}
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {}
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
			type: 'SET_CAR_MODELS',
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
