import React from 'react'
import { connect } from 'react-redux'
import './Button.css'

function Button(props) {
	const { target, text, btnClass } = props
	return (
		<button
			className={`btn btn-header btn-secondary btn-lg ${btnClass}`}
			type="button"
			data-toggle="collapse"
			data-target={`#${target}`}
			aria-expanded="false"
			aria-controls={target}
		>
			{text}
		</button>
	)
}

const mapStateToProps = state => {
	return {
		carList: state.carList,
		sort: state.sort,
		onTerritory: state.onTerritory,
	}
}

export default connect(mapStateToProps)(Button)
