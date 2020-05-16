import React from 'react'
import { connect } from 'react-redux'

function Button(props) {
	const { target, text, btnClass } = props
	return (
		<button
			className={`btn ${btnClass}`}
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
